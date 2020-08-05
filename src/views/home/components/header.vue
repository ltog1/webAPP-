<template>
  <div class="header">
    <div class="search-bar">
      <div class="bar-location">
        <div class="location-icon"></div>
        <div class="location-text">郑州市</div>
      </div>
      <div class="search-btn"><input type="text" placeholder="鸡翅"></div>
    </div>
    <img class="header-img" src="https://app.nihaoshijie.com.cn/upload/bannertemp.e8a6fa63.jpg">
  </div>
</template>

<script>
  export default {
    name: "HomeHeader"
  }
</script>

<style scoped>
  .header {
    position: relative;
  }
  .header-img {
    width: 100%;
    height: 4.746667rem;
  }
  .search-bar {
    position: absolute;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
  }
  .bar-location {
    padding: 15px 0 15px 10px;
    margin-right: 20px;
    border-radius: 33px;
    background-color: rgba(0,0,0,.3);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bar-location .location-icon {
    display: inline-block;
    width: 20px;
    height: 25px;
    vertical-align: 8px;
    margin-right: 6px;
    background: url(../../../assets/imgs/locationIcon.png) no-repeat 50% 0;
    background-size: cover;
  }
  .bar-location .location-text {
    position: relative;
    display: inline-block;
    font-size: 16px;
    color: #fff;
    vertical-align: 12px;
    margin: 0 19px 0 8px;
  }
  .bar-location .location-text:after {
    display: inline-block;
    content: '';
    width: 18px;
    height: 16px;
    background: url(../../../assets/imgs/arrowIcon.png) no-repeat 50% 0;
    background-size: cover;
    margin-left: 10px;
  }
  .search-btn {
    position: relative;
    display: flex;
    align-items: center;
  }
  .search-btn:before {
    display: inline-block;
    content: '';
    width: 26px;
    height: 26px;
    background: url(../../../assets/imgs/searchIcon.png) no-repeat 50% 0;
    background-size: cover;
    position: absolute;
    left: 15px;
  }
  .search-btn input {
    box-sizing: border-box;
    width: 230px;
    height: 45px;
    border-radius: 25px;
    padding-left: 50px;
    outline: none;
    border: none;
    background-color: #fff;
    color: #a9a9a9;
  }
</style>