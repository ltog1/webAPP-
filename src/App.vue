<template>
  <div id="app" class="g-container">
    <div class="g-view-container">
      <router-view/>
    </div>
    <template v-if="$route.name !== 'product'">
      <div class="g-footer-container">
        <c-tabber />
      </div>
    </template>
  </div>
</template>

<script>
  import CTabber from '@/components/tabbar/index'

  export default {
    name: 'App',
    components: {
      CTabber
    }
  }
</script>

<style>
  .g-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  .g-view-container {
    height: 100%;
    padding-bottom: 100px;
    overflow: hidden;
  }
  .g-footer-container {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1000;
    width: 100%;
    box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6);
  }
</style>
