<template>
  <div>
    <bread-crumb itemName1="首页管理" itemName2="显示内容"/>
    <Card>
      <Button @click="add" type="primary" ghost size="small">添加</Button>
      <br>
      <br>
      <Table border :columns="columns" :data="normal_content" :loading="loadTableData"></Table>
    </Card>

    <Modal :value="showModal" :mask-closable="false" :closable="false">
      <h2 slot="header">{{modalData.desc}}</h2>
      <Form ref="modalData" :model="modalData" :rules="RuleValidate" :label-width="50">
        <FormItem prop="title" label="标题">
          <Input v-model.trim="modalData.title" placeholder="请输入标题..."></Input>
        </FormItem>
        <FormItem prop="content" label="内容">
          <Input v-model.trim="modalData.content" type="textarea" autosize placeholder="请输入标题..."></Input>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button @click="showModal = false" type="info" ghost>取消</Button>
        <Button @click="submitModalData('modalData')" type="primary">确定</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import breadCrumb from "@/components/admin/layout/breadcrumb";

export default {
  components: {
    breadCrumb
  },
  mounted() {
    this.loadData();

    let table_data = [
      {
        title: "编号",
        key: "id",
        width: 60
      },
      {
        title: "标题",
        key: "title"
      },
      {
        title: "内容",
        key: "content"
      },
      {
        title: "操作",
        key: "action",
        width: 180,
        align: "center",
        render: (h, params) => {
          return h("div", [
            h(
              "Button",
              {
                props: {
                  type: "primary",
                  size: "small",
                  ghost: true
                },
                style: {
                  marginRight: "5px"
                },
                on: {
                  click: () => {
                    this.show(params.index);
                  }
                }
              },
              "查看"
            ),
            h(
              "Button",
              {
                props: {
                  type: "info",
                  size: "small",
                  ghost: true
                },
                style: {
                  marginRight: "5px"
                },
                on: {
                  click: () => {
                    this.edit(params.index, params.row.id);
                  }
                }
              },
              "编辑"
            ),
            h(
              "Button",
              {
                props: {
                  type: "error",
                  size: "small",
                  ghost: true
                },
                on: {
                  click: () => {
                    this.remove(params.row.id);
                  }
                }
              },
              "删除"
            )
          ]);
        }
      }
    ];
    this.columns = table_data;
  },
  data() {
    return {
      RuleValidate: {
        title: [
          { required: true, message: "标题不能为空!" },
          { max: 10, message: "标题长度不能超过10" }
        ],
        content: [
          { required: true, message: "内容不能为空!" },
          { max: 250, message: "内容长度不能超过250" }
        ]
      },
      modalData: {},
      showModal: false,
      normal_content: [],
      columns: [],
      submitModalType: "",
      loadTableData: true
    };
  },
  methods: {
    loadData() {
      this.http_request.axiosInit(
        this,
        this.request_url.home.content.multiple(1),
        response => {
          this.normal_content = response.data;
        },
        () => (this.loadTableData = false)
      );
    },
    submitModalData(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.msg_modal.confirm(this, "确定提交吗?", () => {
            this.loadTableData = true;
            this.http_request.axios(
              this,
              this.submitModalType,
              this.request_url.home.content.single(),
              () => {
                this.loadData();
                this.showModal = false;
              },
              this.modalData,
              () => this.$Modal.remove()
            );
          });
        }
      });
    },
    add() {
      (this.submitModalType = "post"),
        (this.modalData = {
          desc: "添加内容",
          title: "",
          content: "",
          type: 1
        });
      this.showModal = true;
    },
    show(index) {
      this.$Modal.info({
        title: "查询详情",
        content: `
          <h3>标题:</h3>${this.normal_content[index].title}<br><br>
          <h3>内容:</h3>${this.normal_content[index].content}
        `
      });
    },
    edit(index, id) {
      (this.submitModalType = "put"),
        (this.modalData = {
          desc: "编辑内容",
          id: this.normal_content[index].id,
          title: this.normal_content[index].title,
          content: this.normal_content[index].content
        });
      this.showModal = true;
    },
    remove(id) {
      this.msg_modal.confirm(this, "确定删除吗?", () => {
        this.loadTableData = true;
        this.http_request.axios(
          this,
          "delete",
          this.request_url.home.content.single(id),
          () => this.loadData(),
          null,
          () => this.$Modal.remove()
        );
      });
    }
  }
};
</script>
<style scoped>
</style>


