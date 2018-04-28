<template>
  <div class="rightBar">
    <div class="notice">
      <div class="bd">
        <p>最新公告<img src="../assets/images/NEW.png" alt=""></p>
        <div class="winBox">
          <ul class="scroll">
            <li>1.2016-12-26 15:28 xxxxxxxx订单 湖北武汉 刘平 农副产品 已装车配载  2016-12-26 15:28 xxxxxxxx订单 湖北武汉 刘平 农副产品 已装车配载 2016-12-26 15:28 xxxxxxxx订单<span class="space"></span>2.湖北武汉 刘平 农副产品 已装车配载  2016-12-26 15:28 xxxxxxxx订单 湖北武汉 刘平 农副产品 已装车配载</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="card-box">
      <div class="card backing">
        <div class="bd">
          <div class="inline-block">
            <p class="num">10</p>
            <p class="des">我的待办</p>
          </div>
          <div class="inline-block">
            <img src="../assets/images/agenda.png" alt="" class="scale-hover">
          </div>
        </div>
      </div>
      <div class="card mission">
        <div class="bd">
          <div class="inline-block">
            <p class="num">10</p>
            <p class="des">我的任务</p>
          </div>
          <div class="inline-block ">
            <img src="../assets/images/task.png" alt=""  class="scale-hover">
          </div>
        </div>
      </div>
      <div class="card order">
        <div class="bd">
          <div class="inline-block">
            <p class="num">10</p>
            <p class="des">我的订单</p>
          </div>
          <div class="inline-block ">
            <img src="../assets/images/order.png" alt=""  class="scale-hover">
          </div>
        </div>
        <div class="footer">
          <div class="fl">未执行<i class="icolor-blue">10</i></div>
          <div class="fr">执行中<i class="icolor-orange">180</i></div>
        </div>
      </div>
      <div class="card management">
        <div class="bd">
          <div class="inline-block">
            <p class="num">10</p>
            <p class="des">我的结算</p>
          </div>
          <div class="inline-block ">
            <img src="../assets/images/account.png" alt=""  class="scale-hover">
          </div>
        </div>
      </div>
    </div>
    <div class="statistics clearfix">
      <p class="toggle">
        <span class="active">订单完成统计</span>
        <span>订单新增统计</span>
      </p>
      <div class="wrap">
        <div class="echarts-box" id="main0">
          <div class="echarts-md clearfix">
            <div class="fl wid50">
              <div class="date-big inline-block ">
                本月统计<img src="../assets/images/arrow.png" class="more" alt="">
                <div class="cato">
                  <p>按月统计</p>
                  <p>按季统计</p>
                </div>
              </div>
              <div class="date-small inline-block">
                <select name="" id="">
                  <option value="">2018年1月</option>
                </select>
              </div>
            </div>
            <!-- <div class="fr wid50">
                                  <div class="inline-block">
                                      <img src="../assets/images/cir1.jpg" alt="">已完成
                                  </div>
                                  <div class="inline-block"><img src="../assets/images/cir1.jpg" alt="" class="cir1">准时完成率</div>
                              </div> -->
          </div>
          <div id="main">

          </div>
        </div>
        <div class="table-list">
          <div class="item-total">
            <div class="total-left inline-block">
              <p>累计订单</p>
              <p class="icolor-orange">1100</p>
            </div>
            <div class="total-right inline-block">
              <p>累计准时完成率</p>
              <p class="icolor-blue">95.2%</p>
            </div>
          </div>
          <div class="item-list">
            <div class="list-hd">
              <div class="inline-block">
                统计项目
              </div>
              <div class="inline-block">
                订单张数
              </div>
            </div>
            <div class="list-bd">
              <div class="inline-block">
                本月已完成
              </div>
              <div class="inline-block font22">
                28
              </div>
            </div>
            <div class="list-bd">
              <div class="inline-block">
                本月准时完成
              </div>
              <div class="inline-block font22">
                30
              </div>
            </div>
            <div class="list-bd">
              <div class="inline-block">
                本月已取消
              </div>
              <div class="inline-block font22">
                2
              </div>
            </div>
            <div class="list-bd">
              <div class="inline-block">
                本月新增订单
              </div>
              <div class="inline-block font22">
                20
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
export default {
  mounted (){
    var myChart = echarts.init(document.getElementById('main'));
    // 指定图表的配置项和数据
    var option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        boundaryGap: false,
      },
      yAxis: {
        type: 'value',
        show:false
      },
      legend: {
        // data:[{'2015 降水量',textStyle:{color:'#333'}}, {'2016 降水量',textStyle:{color:'#666'}}]
        data:[{name:'2015 降水量',textStyle:{color:'red'}},
          {name:'2016 降水量',textStyle:{color:'orange'}},
          // {name:'教育贷',textStyle:{color:'#FCCE10'}}
        ],
      },
      tooltip: {
        trigger: 'none',
        axisPointer: {
          type: 'cross'
        }
      },
      series: [{
        name:'2015 降水量',
        data: [120, 932, 301, 934, 220, 1330, 320],
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 3,
        showSymbol: false,
        lineStyle: {
          normal: {
            width: 0,
            type:"dashed",
          }
        },
        areaStyle: {normal: {
            color:"#796fcf"
          }},
      },{
        data: [220, 182, 1191, 234, 1290,  310,1330,],
        name:'2016 降水量',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 3,
        showSymbol: false,
        lineStyle: {
          normal: {
            width: 0,
            type:"dashed",
          }
        },
        areaStyle: {normal: {
            color:"#73d571"
          }},
      },]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
}
</script>

<style>

</style>
