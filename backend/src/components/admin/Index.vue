<template>
  <div class="home">
    <el-row :gutter="20">
  <el-col  :sm="24" :md="12" :lg="12" >
    <el-card class="box-card card">
        <div id="chart" style="width:100%;height:300px;"></div>
    </el-card>
  </el-col>
  <el-col  :sm="24" :md="12" :lg="12">
    <el-card class="box-card card">
        <div id="chart1" style="width:100%;height:300px;"></div>
    </el-card>
  </el-col>
</el-row>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {
        //加载图片
        items: [require("../../assets/logo.png"), require("../../assets/logo.png")]
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        // 基于准备好的dom，初始化echarts实例
        // var myChart = this.$echarts.init(document.getElementById('chart'));
        // var myChart1 = this.$echarts.init(document.getElementById('chart1'));
                // 指定图表的配置项和数据
        var option = {
          title: {
            text: '文章发表数量'
          },
          tooltip: {},
          legend: {
            data: ['销量']
          },
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        };
        // 使用刚指定的配置项和数据显示图表。
        // myChart.setOption(option);
        // myChart1.setOption(option);
      }
    }
  }
</script>

<style>
  /* .home{
  }
  .card {
    width: 100%!important;
    margin-right:10px;
  } */
</style>