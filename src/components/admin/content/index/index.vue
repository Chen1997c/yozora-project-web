<template>
  <div id="index">
    <div class="index-title">Administrator Index page</div>
    <Card class="desc-card">
      <h3>届かない‘コイ’</h3>
      <P>孤独なふりをしてるの？</P>
      <P>何故だろう、気になっていた。</P>
      <p>
        <Tag color="error">提示</Tag>
      </p>
    </Card>
    <Row :gutter="40">
      <Col :span="6">
        <div class="count-inline blue">
          <div class="content">
            <div class="count">1349</div>
            <div class="message">新消息</div>
          </div>
          <a class="bottom">查看更多
            <Icon type="md-arrow-forward"/>
          </a>
        </div>
      </Col>
      <Col :span="6">
        <div class="count-inline red">
          <div class="content">
            <div class="count">652</div>
            <div class="message">提醒</div>
          </div>
          <a class="bottom">查看更多
            <Icon type="md-arrow-forward"/>
          </a>
        </div>
      </Col>
      <Col :span="6">
        <div class="count-inline green">
          <div class="content">
            <div class="count">119</div>
            <div class="message">文章</div>
          </div>
          <a class="bottom">查看更多
            <Icon type="md-arrow-forward"/>
          </a>
        </div>
      </Col>
      <Col :span="6">
        <div class="count-inline purple">
          <div class="content">
            <div class="count">4723</div>
            <div class="message">用户</div>
          </div>
          <a class="bottom">查看更多
            <Icon type="md-arrow-forward"/>
          </a>
        </div>
      </Col>
    </Row>
    <Row :gutter="40" class="count-card">
      <Col :span="12">
        <Card>
          <div class="title text-green">
            <div class="title-left">
              <Icon type="ios-happy-outline"/>资源统计
            </div>
            <div class="title-right">
              <Button size="small" type="error" shape="circle" ghost>前一天</Button>
              <Button size="small" type="info" shape="circle" ghost>
                <Tooltip placement="top" :content="today">今天</Tooltip>
              </Button>
              <Button size="small" type="success" shape="circle" ghost>后一天</Button>
            </div>
          </div>
          <Divider/>
          <div id="resource" style="min-height:300px;width:430px"></div>
        </Card>
      </Col>
      <Col :span="12">
        <Card>
          <div class="title text-green">
            <div class="title-left">
              <Icon type="ios-people"/>性别分布
            </div>
          </div>
          <Divider/>
          <div id="sex" style="min-height:300px;width:430px"></div>
        </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
const echarts = require("echarts");

export default {
  mounted() {
    let resourceEcharts = echarts.init(document.getElementById("resource"));
    resourceEcharts.setOption(this.resourceOption);

    let sexEcharts = echarts.init(document.getElementById("sex"));
    sexEcharts.setOption(this.sexOption);
  },
  data() {
    return {
      today:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate(),
      sexOption: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["小姐姐", "小妹妹"]
        },
        series: [
          {
            name: "性别分布",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "小姐姐" },
              { value: 310, name: "小妹妹" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      },
      resourceOption: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["音乐", "电影", "连续剧"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "12-17",
              "12-18",
              "12-19",
              "12-20",
              "12-21",
              "12-22",
              "12-23"
            ]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "音乐",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "电影",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "连续剧",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [350, 12, 221, 154, 550, 130, 420]
          }
        ]
      }
    };
  }
};
</script>
<style scoped>
.index-title {
  margin-bottom: 10px;
  color: #697882;
  font-size: 22px;
  font-weight: 400;
}

.desc-card {
  border-left: 5px solid #2d8cf0;
  margin-bottom: 20px;
}

.count-inline {
  position: relative;
  height: 120px;
  border-radius: 5px;
  color: #fff;
  text-align: right;
  font-weight: 100;
  font-family: "Segoe UI", "Lucida Grande", Helvetica, Arial, "Microsoft YaHei",
    FreeSans, Arimo, "Droid Sans", "wenquanyi micro hei", "Hiragino Sans GB",
    "Hiragino Sans GB W3", FontAwesome, sans-serif;
}

.blue {
  background: #2d8cf0;
}
.red {
  background: #e7505a;
}
.green {
  background: #32c5d2;
}
.purple {
  background: #8e44ad;
}

.count-inline .content {
  position: absolute;
  right: 5%;
  top: 20%;
}
.count-inline .count {
  font-size: 30px;
}
.count-inline .message {
  font-size: 16px;
}

.count-inline .bottom {
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 5px 10px;
  color: #fff;
  text-align: left;
}

.count-card {
  margin-top: 20px;
}

.text-green {
  color: #32c5d2;
}

.count-card .title {
  overflow: auto;
  font-size: 17px;
}

.count-card .title-left {
  float: left;
}
.count-card .title-right {
  float: right;
}
</style>


