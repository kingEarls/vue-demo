<template>
  <div id="app">
    <div class="topBar">
      <a-head></a-head>
    </div>
    <div class="content">
      <div class="wrapper">
        <a-right></a-right>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import AHead from '@/components/AHead'
  import ALeft from '@/components/ALeft'
  import ARight from '@/components/ARight'
export default {
  name: 'App',
  components:{
    AHead,
    ALeft,
    ARight
  }
}
</script>

<style scoped>

</style>
