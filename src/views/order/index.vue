<template>
  <div class="order">
    <div class="header">订单</div>
    <ul class="lists">
      <li class="item" v-for="(item,index) in list" :key="index">
        <img class="item-pic" v-lazy="item.poi_pic">
        <dl class="item-info">
          <dt class="item-name">
            <span class="item-ming">{{item.poi_name}}</span>
            <div class="item-iconfont"></div>
            <span class="item-done">{{item.status_description}}</span>
          </dt>
          <dd class="item-meal" v-for="(meal,index) in item.product_list" :key="index"><span>{{meal.product_name}}</span><span>x{{meal.product_count}}</span></dd>
          <dd class="item-total">
            <span class="item-dian">...</span>
            <span class="item-moeny">总计{{item.product_count}}个菜，实付<b>￥{{item.total}}</b></span>
          </dd>
          <dd class="item-btn"><a href="">评价</a></dd>
        </dl>
      </li>
    </ul>
    <div class="done" v-if="page !== 3">加载中</div>
    <div class="done" v-else>加载完成</div>
  </div>
</template>

<script>
  export default {
    name: "order",
    data() {
      return {
        digestlist: [],
        list: [],
        page: 0,
        timer: null
      };
    },
    created() {
      this.getOrederInfo();
    },
    mounted() {
      window.addEventListener('scroll',this.handlerScroll);
    },
    methods: {
      getOrederInfo() {
        this.page ++;
        this.$http.get('/json/orders.json').then(res => {
          this.digestlist = res.data.data.digestlist;
          this.digestlist.forEach(item => {
            this.list.push(item);
          })
        });
      },
      // 上拉加载更多
      handlerScroll() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          let clientHeight = document.documentElement.clientHeight, // 可视区高度
              scrollHeight = document.body.scrollHeight, // 滚动高度
              scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 滚动条内的内容高度

          let pages = this.page;

          if (clientHeight + scrollTop >= (scrollHeight - 30)) {
            if (pages < 3) {
              this.getOrederInfo();
            } else {
              window.removeEventListener('scroll',this.handlerScroll);
            }
          }
        },500);
      }
    }
  }
</script>

<style scoped>
  .order {
    background-color: #f2f2f2;
  }
  .header {
    height: 100px;
    color: #333;
    font-size: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid #b2b2b2;
  }
  .lists {
    color: #666;
  }
  .item {
    padding: 15px 0 15px 20px;
    background-color: #fff;
    display: flex;
    margin-top: 20px;
  }
  .item-pic {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .item-info {
    margin: 20px 0 0 30px;
    flex: 1;
  }
  .item-name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 25px;
  }
  .item-ming {
    width: 300px;
    color: #333;
    font-size: 32px;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-iconfont {
    width: 15px;
    height: 15px;
    border: 1px solid #999;
    border-width: 1px 1px 0 0;
    transform: rotate(45deg);
    margin-left: 20px;
  }
  .item-done{
    margin-right: 20px;
  }
  .item-meal {
    display: flex;
    justify-content: space-between;
    margin: 25px 20px 25px 0;
    color: #666;
    font-size: 26px;
  }
  .item-total {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 25px;
  }
  .item-moeny {
    margin-right: 20px;
  }
  .item-total .item-moeny b {
    color: #151515;
    font-size: 28px;
  }
  .item-btn {
    text-align: right;
    margin: 15px 20px 0 0;
  }
  .item-btn a {
    display: inline-block;
    width: 200px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #6b450a;
    font-size: 28px;
    background-color: #ffd161;
  }
  .done {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    color: #333;
    font-size: 32px;
    font-weight: bold;
  }
</style>