<template>
  <div class="score">
    <div v-for="(item,index) in starArr" :key="index" :class="item"></div>
  </div>
</template>

<script>
  export default {
    name: "index",
    props: {
      score: Number
    },
    computed: {
      starArr() {
        let starClass = [];
        let scores = this.score.toString().split('.'),
            scoresLevel = scores[0],
            scoresHalf = scores[1];

        // 满星
        for (let i = 0; i < scoresLevel; i++) {
          starClass.push('fullStar');
        }
        // 半星
        if (scoresHalf) {
          if (scoresHalf >= 5) {
            starClass.push('halfStar');
          }
        }
        // 灰色星星
        while (starClass.length < 5) {
          starClass.push('nullStar');
        }

        return starClass;
      }
    }
  }
</script>

<style scoped>
  .score {
    display: flex;
  }
  .nullStar {
    width: 20px;
    height: 20px;
    background: url(../../assets/imgs/gray-star.png) no-repeat;
    background-size: cover;
  }
  .fullStar {
    width: 20px;
    height: 20px;
    background: url(../../assets/imgs/fullstar.png) no-repeat;
    background-size: cover;
  }
  .halfStar {
    width: 20px;
    height: 20px;
    background: url(../../assets/imgs/halfstar.png) no-repeat;
    background-size: cover;
  }
</style>