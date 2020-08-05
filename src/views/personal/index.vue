<template>
  <div class="personal">
    <div class="head">
      <img src="http://i.waimai.meituan.com/static/img/default-avatar.png">
      <p>美团小骑手 ></p>
    </div>
    <div class="top">
      <p class="top-site">
        <img class="top-pic" src="./img/address.png">
        <span class="top-di">收货地址管理</span>
        <span class="top-iconfont">></span>
      </p>
      <p class="top-site no">
        <img class="top-pic" src="./img/money.png">
        <span class="top-di"><img src="">商家代金券</span>
        <span class="top-iconfont">></span>
      </p>
    </div>
    <div class="bottom">
      <p class="top-site">
        <img class="top-pic" src="./img/email.png">
        <span class="top-di">意见反馈</span>
        <span class="top-iconfont">></span>
      </p>
      <p class="top-site">
        <img class="top-pic" src="./img/question.png">
        <span class="top-di">常见问题</span>
        <span class="top-iconfont">></span>
      </p>
    </div>
    <div class="phone">客服电话: 101-097-77</div>
    <div class="server">服务时间: 9:00-23:00</div>
  </div>
</template>

<script>
  export default {
    name: "personal"
  }
</script>

<style scoped>
  .personal {
    background-color: #f2f2f2;
    min-height: 1334px;
  }
  .head {
    background: url(./img/header.png) no-repeat;
    background-size: 100%;
    width: 100%;
    height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .head img {
    width: 20%;
    border-radius: 50%;
    border: 8px solid rgba(255,255,255,0.4);
  }
  .head p {
    margin-top: 15px;
    font-size: 30px;
  }
  .top {
    background-color: #fff;
    padding-left: 20px;
  }
  .top-site {
    display: flex;
    align-items: center;
    padding: 30px 0 30px 0;
    position: relative;
    border-bottom: 1px solid #e4e4e4;
  }
  .top-site.no {
    border: none;
  }
  .top-pic {
    width: 30px;
    height: 32px;
  }
  .top-di {
    color: #333;
    font-size: 28px;
    margin-left: 20px;
  }
  .top-iconfont {
    position: absolute;
    right: 30px;
  }
  .bottom {
    margin: 20px 0;
    background-color: #fff;
    padding-left: 20px;
  }
  .phone {
    color: #ffb000;
    background-color: #fff;
    font-size: 30px;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .server {
    margin-top: 20px;
    font-size: 28px;
    color: #666;
    text-align: center;
  }
</style>