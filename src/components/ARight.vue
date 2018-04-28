<template>
  <div class="leftBar">
    <div class="time-display">
      <p class="time">{{ time }}</p>
      <p class="date">{{ date }}</p>
    </div>
    <ul class="item-box">
      <li class="lv1">
        <router-link to="/" class="data" @click.native="show=!show" :class="{active:show}">数据中心<i></i></router-link>
        <transition name="slide-fade">
          <ul v-if="show">
            <li class="lv2">我的待办</li>
            <li class="lv2">我的任务</li>
            <li class="lv2">我的订单</li>
            <li class="lv2">我的结算</li>
          </ul>
        </transition>

      </li>
      <li class="lv1"><router-link to="/hello" href="#" class="task">发布任务<i></i></router-link></li>
      <li class="lv1"><a href="#" class="issue">我的发布<i></i></a></li>
      <li class="lv1"><a href="#" class="order">我的订单<i></i></a></li>
      <li class="lv1"><a href="#" class="manage">结算管理<i></i></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show:true,
      time :"",
      date:""
    }
  },
  beforeMount () {
    console.log(this.time);
    let self=this;
    setInterval(run,1000);
    function run(){
      let time = new Date();//获取系统当前时间
      let year = time.getFullYear();
      let month = time.getMonth()+1;
      let date= time.getDate();//系统时间月份中的日
      let day = time.getDay();//系统时间中的星期值
      let weeks = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
      let week = weeks[day];//显示为星期几
      let hour = time.getHours();
      let minutes = time.getMinutes();
      let seconds = time.getSeconds();
      if(month<10){
        month = "0"+month;
      }
      if(date<10){
        date = "0"+date;
      }
      if(hour<10){
        hour = "0"+hour;
      }
      if(minutes<10){
        minutes = "0"+minutes;
      }
      if(seconds<10){
        seconds = "0"+seconds;
      }
      //let newDate = year+"年"+month+"月"+date+"日"+week+hour+":"+minutes+":"+seconds;
      self.time = hour+":"+minutes+':'+seconds;
      self.date=year+"年"+month+"月"+date+"日"+week;
    }
    run();
  },
}
</script>

<style>
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .2s ease;
  }
  .slide-fade-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
