<template>
  <div class="g-tabbar">
    <router-link class="g-tabber-item" to="/">
      <i class="iconfont">&#xe62e;</i>
      <span>首页</span>
    </router-link>
    <router-link class="g-tabber-item" to="/order">
      <i class="iconfont">&#xe645;</i>
      <span>订单</span>
    </router-link>
    <router-link class="g-tabber-item" to="/personal">
      <i class="iconfont">&#xe641;</i>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>
  .g-tabbar {
    width: 100%;
    height: 100px;
    display: flex;
    background-color: #fff;
  }
  .g-tabber-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .iconfont {
    font-size: 44px;
    margin-bottom: 4px;
  }
  .router-link-active {
    color: #ffa627;
  }
</style>