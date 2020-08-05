<template>
  <div class="category">
    <div class="list" v-for="(item,index) in list" :key="index">
      <img class="list-pic" v-lazy="item.url">
      <p class="list-name">{{item.name}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeCategory",
    props: {
      list: Array
    }
  }
</script>

<style scoped>
  .category {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 10px;
  }
  .list {
    margin-top: 30px;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .list-pic {
    width: 50%;
    margin-bottom: 15px;
  }
</style>