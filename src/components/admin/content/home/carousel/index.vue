<template>
  <div>
    <bread-crumb itemName1="首页管理" itemName2="轮播图片"/>
    <Card>
      <div class="demo-upload-list" v-for="item in uploadList">
        <template v-if="item.status === 'finished'">
          <img :src="item.url">
          <div class="demo-upload-list-cover">
            <Icon type="ios-eye-outline" @click.native="handleView(item.url)"></Icon>
            <Icon type="ios-trash-outline" @click.native="handleRemove(item,item.id)"></Icon>
          </div>
        </template>
        <template v-else>
          <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
        </template>
      </div>
      <Upload
        ref="upload"
        :show-upload-list="false"
        :default-file-list="imgs"
        :on-success="handleSuccess"
        :format="['jpg','jpeg','png']"
        :max-size="2048"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        :before-upload="handleBeforeUpload"
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/"
        style="display: inline-block;width:58px;"
      >
        <div style="width: 58px;height:58px;line-height: 58px;">
          <Icon type="ios-camera" size="20"></Icon>
        </div>
      </Upload>
      <Modal title="查看图片" v-model="visible">
        <img class="viewImg" :src="imgUrl" alt="carousel_item">
      </Modal>
    </Card>
  </div>
</template>
<script>
import breadCrumb from "@/components/admin/layout/breadcrumb";

export default {
  components: {
    breadCrumb
  },
  data() {
    return {
      uploadList: [],
      imgUrl: "",
      visible: false,
      imgs: []
    };
  },
  methods: {
    handleView(url) {
      this.imgUrl = url;
      this.visible = true;
    },
    handleRemove(file, id) {
      this.msg_modal.confirm(this, "确定删除吗", () => {
        this.http_request.axios(
          this,
          "delete",
          this.request_url.home.carousel.single(id),
          () => {
            const fileList = this.$refs.upload.fileList;
            this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
          }
        );
      });
    },
    handleSuccess(res, file) {},
    handleFormatError(file) {
      this.$Notice.warning({
        title: "上传文件格式错误",
        desc: "仅支持jpg,jpeg,png,svg格式的图片"
      });
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: "超过上传大小限制",
        desc: "上传支持最大文件大小为2M"
      });
    },
    handleBeforeUpload() {
      const check = this.uploadList.length < 5;
      if (!check) {
        this.$Notice.warning({
          title: "超过最大文件上传数量(5)"
        });
      }
      return check;
    }
  },
  mounted() {
    this.http_request.axiosInit(
      this,
      this.request_url.home.carousel.multiple(),
      response => {
        response.data.forEach(carousel => {
          let param = {
            id: carousel.id,
            url: require("@/assets/images/" + carousel.url)
          };
          this.imgs.push(param);
        });
      },
      () => (this.uploadList = this.$refs.upload.fileList)
    );
  }
};
</script>
<style scoped>
.demo-upload-list {
  display: inline-block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}
.demo-upload-list img {
  width: 100%;
  height: 100%;
}
.demo-upload-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}
.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}
.demo-upload-list-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}

.viewImg {
  display: inline-block;
  width: 100%;
}
</style>