<template>
  <div id="app">
    <div class="header"><TheHeader></TheHeader></div>
    <div class="main"><router-view/></div>
    <div class="footer"><TheFooter></TheFooter></div>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader'
import TheFooter from './components/layout/TheFooter'
export default {
  components: {
    TheHeader,
    TheFooter
  },
  mounted() {
    this.$store.dispatch('fetchArticles')
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Noto Serif TC', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
  .main{
    flex: 1;
    overflow: hidden;
  }  
}
*{
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}
</style>
