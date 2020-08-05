<template>
  <transition name="product" appear>
    <div class="product" v-if="fetching">
      <div class="header">
        <i class="iconfont" @click.prevent="goBack">&#xe624;</i>
        <span>深圳麦当劳前海餐厅</span>
      </div>
      <div class="tabs">
        <a class="tabs-btn left after" @click.prevent="swtichArea(1,$event)">点菜</a>
        <a class="tabs-btn center" @click.prevent="swtichArea(2,$event)">评价</a>
        <a class="tabs-btn right" @click.prevent="swtichArea(3,$event)">商家</a>
      </div>
      <div class="content">
        <div class="tab">
          <ul class="tab-list">
            <li class="tab-item" v-for="(item,index) in food_spu_tags" :key="index">
              <a class="tab-btn" :class="{'active': tabCurIndex === index}" @click.prevent="swtichTab(index)">
                <img v-if="item.icon" class="tab-pic" :src="item.icon">
                <span class="tab-text">{{item.name}}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="main">
          <p class="main-title">{{food_spu_tags[tabCurIndex].name}}</p>
          <div class="main-list">
            <div class="main-item" v-for="(food,index) in spus" :key="index">
              <img class="item-pic" :src="food.picture">
              <dl class="item-info">
                <dt class="item-name">{{food.name}}</dt>
                <dd class="item-subname">{{food.description}}</dd>
                <dd class="item-zan">{{food.praise_content}}</dd>
                <dd class="item-moeny">
                  <span><b>￥{{food.min_price}}</b>{{food.unit}}</span>
                  <div class="item-count">
                    <i class="reduce" @click.prevent="reduce(food)"></i>
                    <span class="count">{{food.chooseCount}}</span>
                    <i class="add" @click.prevent="add(food)"></i>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div class="bottom">
        <div class="bottom-iconfont" @click.prevent="clickShop">
          <img src="./img/shop-icon.png">
          <div class="bottom-iconfont-num">{{count}}</div>
        </div>
        <dl class="bottom-dl">
          <dt class="bottom-dt">￥{{totalPrice}}</dt>
          <dd class="bottom-dd">另需配送费￥9</dd>
        </dl>
        <div class="bottom-gosettle">去结算</div>
      </div>

      <div class="shopping" v-if="shopShow">
        <div class="shopping-head"><img src="./img/clear.jpeg">清空购物车</div>
        <div class="shopping-info" v-for="(shop,index) in shoppingList" :key="index">
          <div class="info-name">{{shop.name}}</div>
          <div class="info-price">￥{{shop.price}}</div>
          <div class="info-count">
            <i class="info-reduce" @click.prevent="shopReduce(shop)"></i>
            <span class="info-num">{{shop.chooseCount}}</span>
            <i class="info-add" @click.prevent="shopAdd(shop)"></i>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "product",
    data() {
      return {
        shopShow: false,
        fetching: false,
        food_spu_tags: [],
        spus: [],
        tabCurIndex: 0
      };
    },
    watch: {
      // 监听tab栏index变化,拿到相应详情列表数据
      tabCurIndex() {
        this.spus = this.food_spu_tags[this.tabCurIndex].spus;
      },
      spus() {
        this.spus.forEach(item => {
          if (!item.chooseCount) {
            this.$set(item,'chooseCount',0);
          }
        });
      }
    },
    computed: {
      // 购物车列表
      shoppingList() {
        let shoppingList = [];
        this.food_spu_tags.forEach(item => {
          item.spus.forEach(item => {
            if (item.chooseCount > 0) {
              shoppingList.push({
                name: item.name,
                price: item.min_price * item.chooseCount,
                chooseCount: item.chooseCount
              });
            }
          });
        });
        return shoppingList;
      },
      // 购物车数量
      count() {
        let count = 0;
        this.shoppingList.forEach(item => {
          count += item.chooseCount;
        });
        return count;
      },
      // 购物车总价
      totalPrice() {
        let totalPrice = 0;
        this.shoppingList.forEach(item => {
          totalPrice += item.price;
        });
        return totalPrice;
      }
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        this.$http.get('/json/food.json').then(res => {
          this.food_spu_tags = res.data.data.food_spu_tags;
          this.spus = this.food_spu_tags[this.tabCurIndex].spus;
          this.fetching  = true;
        });
      },
      swtichArea(type,e) {
        if (e.currentTarget.classList.contains('after')) {
          return ;
        }

        let left = document.querySelector('.left'),
            center = document.querySelector('.center'),
            right = document.querySelector('.right');

        e.currentTarget.classList.add('after');

        if (type === 1) {
          center.classList.remove('after');
          right.classList.remove('after');
        } else if (type === 2) {
          left.classList.remove('after');
          right.classList.remove('after');
        } else {
          left.classList.remove('after');
          center.classList.remove('after');
        }
      },
      swtichTab(index) {
        this.tabCurIndex = index;
      },
      add(item) {
        item.chooseCount++;
      },
      reduce(item) {
        if (item.chooseCount === 0) {
          return ;
        }
        item.chooseCount--;
      },
      shopReduce(shop) {
        this.food_spu_tags.forEach(item => {
          item.spus.forEach(_item => {
            if (_item.name === shop.name) {
              _item.chooseCount--;
            }
          });
        });
      },
      shopAdd(shop) {
        this.food_spu_tags.forEach(item => {
          item.spus.forEach(_item => {
            if (_item.name === shop.name) {
              _item.chooseCount++;
            }
          });
        });
      },
      clickShop() {
        this.shopShow = !this.shopShow;
      },
      goBack() {
        this.$router.back();
      }
    }
  }
</script>

<style scoped>
  .header {
    height: 120px;
    line-height: 120px;
    position: relative;
    border-bottom: 1px solid #b2b2b2;
  }
  .iconfont {
    font-size: 38px;
    margin-left: 20px;
  }
  .header span {
    position: absolute;
    left: 50%;
    transform: translate(-50%,0);
    font-size: 30px;
    color: #2f2f2f;
  }
  .tabs {
    display: flex;
    justify-content: center;
    border-bottom: 2px solid #f0f0f0;
  }
  .tabs-btn {
    flex: 1;
    height: 90px;
    line-height: 90px;
    text-align: center;
    font-size: 32px;
    color: #666;
    position: relative;
  }
  .after:after {
    content: '';
    display: inline-block;
    width: 110px;
    height: 7px;
    background-color: #ffd161;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%,0);
  }
  .content {
    display: flex;
    position: absolute;
    top: 214px;
    left: 0;
    bottom: 0;
    overflow: hidden;
    width: 100%;
    padding-bottom: 100px;
  }
  .tab {
    width: 200px;
    overflow: auto;
  }
  .tab-list {
    background-color: #efefef;
  }
  .active {
    background-color: #fff;
  }
  .tab-btn {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #bfbfbf
  }
  .tab-pic {
    width: 40px;
    height: 40px;
  }
  .tab-text {
    font-size: 28px;
    margin-left: 15px;
    color: #666;
  }
  .main {
    flex: 1;
    overflow: auto;
  }
  .main-title {
    color: #333;
    margin: 20px 0 0 20px;
    font-size: 28px;
    border-left: 5px solid #ffd161;
    padding-left: 10px;
  }
  .main-item {
    display: flex;
    margin: 30px 0 0 20px;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 50px;
  }
  .item-pic {
    width: 140px;
    height: 140px;
  }
  .item-info {
    flex: 1;
    color: #a9a9a9;
    margin-left: 10px;
  }
  .item-name {
    color: #2f2f2f;;
    font-size: 32px;
  }
  .item-subname {
    padding: 15px 0;
    line-height: 1.5;
  }
  .item-zan {
    margin-bottom: 15px;
  }
  .item-moeny {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
  }
  .item-moeny b{
    color: #fe4d3d;
    font-size: 36px;
    margin-right: 10px;
  }
  .item-count {
    display: flex;
    align-items: center;
  }
  .reduce {
    display: inline-block;
    width: 50px;
    height: 50px;
    background: url(./img/minus.png) no-repeat;
    background-size: cover;
  }
  .count {
    margin: 0 15px;
  }
  .add {
    display: inline-block;
    width: 50px;
    height: 50px;
    background: url(./img/plus.png) no-repeat;
    background-size: cover;
    margin-right: 15px;
  }
  .bottom {
    width: 100%;
    height: 100px;
    background-color: rgba(0,0,0,.8);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 2;
  }
  .bottom-iconfont {
    position: relative;
    margin: -50px 0 0 20px;
  }
  .bottom-iconfont img {
    display: block;
    width: 100px;
    height: 100px;
  }
  .bottom-iconfont-num {
    position: absolute;
    top: -10px;
    right: 0;
    background-color: #fb4e44;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    font-size: 18px;
    color: #fff;
    border-radius: 50%;
    border: 1px solid #fff;
  }
  .bottom-dl {
    color: #fff;
    margin-left: 20px;
    flex: 1;
  }
  .bottom-dt {
    font-size: 36px;
    margin-bottom: 5px;
  }
  .bottom-dd {
    color: #999;
  }
  .bottom-gosettle {
    width: 250px;
    height: 100%;
    background-color: #ffd161;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 38px;
  }
  .shopping {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 100px;
    background-color: #fff;
    z-index: 1;
  }
  .shopping-head {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 20px 30px 20px 0;
    background-color: #f4f4f4;
  }
  .shopping-head img {
    display: block;
    width: 5%;
    margin-right: 5px;
  }
  .shopping-info {
    display: flex;
    align-items: center;
    padding: 40px 30px;
    color: #2f2f2f;
    font-size: 32px;
    border-bottom: 1px solid #ddd;
  }
  .info-name {
    flex: 1;
  }
  .info-price {
    margin-right: 50px;
  }
  .info-count {
    display: flex;
    align-items: center;
  }
  .info-reduce {
    display: inline-block;
    width: 50px;
    height: 50px;
    background: url(./img/minus.png) no-repeat;
    background-size: cover;
  }
  .info-num {
    margin: 0 20px;
  }
  .info-add {
    display: inline-block;
    width: 50px;
    height: 50px;
    background: url(./img/plus.png) no-repeat;
    background-size: cover;
    margin-right: 15px;
  }


  .product-enter-active,
  .product-leave-active {
    transition: all .3s;
  }

  .product-enter,
  .product-leave-to {
    transform: translate(100%,0);
  }

</style>