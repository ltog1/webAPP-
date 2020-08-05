<template>
  <div class="recommend">
    <h4 class="title"><span class="title-line"></span>附近商家<span class="title-line"></span></h4>
    <router-link to="/product">
      <div class="recommend-list" v-for="(item,index) in poilist" :key="index">
        <img class="item-pic" v-lazy="item.pic_url">
        <p class="item-brand" v-if="item.brand_type !== 0">品牌</p>
        <p class="item-brand" :style="{'background-color': '#21c56c'}" v-else>新到</p>
        <dl class="item-info">
          <dt class="item-name">{{item.name}}</dt>
          <dd class="item-sale">
            <score :score="item.wm_poi_score" />
            <span>月售{{item.month_sale_num > 999 ? '999+' : item.month_sale_num}}</span>
            <span>{{item.mt_delivery_time}} | {{item.distance}}</span></dd>
          <dd class="item-dis"><span>{{item.min_price_tip}} | {{item.mt_delivery_time}}</span><span>美团专送</span></dd>
          <dd class="item-activity" v-for="(discounts,index) in item.discounts2" :key="index">
            <img :src="discounts.icon_url">
            <p>{{discounts.info}}</p>
          </dd>
        </dl>
      </div>
    </router-link>
  </div>
</template>

<script>
  import score from '@/components/score/index';
  export default {
    name: "HomeRecommend",
    components: {
      score
    },
    props: {
      poilist: Array
    }
  }
</script>

<style scoped>
  .recommend {
    padding: 0 20px 20px;
  }
  .title {
    text-align: center;
    font-size: 28px;
    margin: 15px 0;
  }
  .title-line {
    display: inline-block;
    height: 1px;
    width: 50px;
    background-color: #949494;
    margin: 0 20px;
  }
  .recommend-list {
    display: flex;
    padding: 25px 10px;
    color: #656565;
    position: relative;
  }
  .item-pic {
    width: 190px;
    height: 130px;
    border: 1px solid #e4e4e4;
  }
  .item-brand {
    position: absolute;
    top: 25px;
    left: 10px;
    background-color: #ffa627;
    color: #fff;
    padding: 5px 5px;
  }
  .item-info {
    flex: 1;
    margin: 8px 0 0 15px;
  }
  .item-info dd {
    font-size: 24px;
  }
  .item-name {
    color: #333;
    font-size: 28px;
  }
  .item-sale {
    display: flex;
    margin: 20px 0;
    position: relative;
  }
  .item-sale span:nth-of-type(1) {
    padding-left: 15px;
  }
  .item-sale span:nth-of-type(2) {
    position: absolute;
    right: 0;
  }
  .item-dis {
    position: relative;
  }
  .item-dis span:nth-of-type(2) {
    position: absolute;
    right: 0;
    padding: 5px 5px;
    background-color: #ffa627;
    color: #333;
  }
  .item-activity {
    display: flex;
    align-items: center;
    margin: 20px 0;
  }
  .item-activity img {
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }
</style>