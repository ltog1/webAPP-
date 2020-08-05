<template>
  <div class="home">
    <home-header />
    <home-category :list="primary_filter" />
    <home-recommend :poilist="poilist"/>
  </div>
</template>

<script>
  import HomeHeader from './components/header'
  import HomeCategory from './components/category'
  import HomeRecommend from './components/recommend'
  export default {
    name: "home",
    data() {
      return {
        primary_filter: [],
        poilist: []
      };
    },
    components: {
      HomeHeader,
      HomeCategory,
      HomeRecommend
    },
    created() {
      this.$http.all([
        this.$http.get('/json/head.json'),
        this.$http.get('/json/homelist.json')
      ]).then(this.$http.spread((dataCategory,dataRecommend) => {
        this.primary_filter = dataCategory.data.data.primary_filter;
        this.poilist = dataRecommend.data.data.poilist;
      }))
    }
  }
</script>

<style scoped>

</style>