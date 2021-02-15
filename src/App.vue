<template>
  <div id="app">
    <div class="header"><TheHeader></TheHeader></div>
    <div class="main"><router-view/></div>
    <div class="footer"><TheFooter></TheFooter></div>
    <div class="box" @click="backTop" v-show="backFlag">
      <a><i class="icon"></i></a>
    </div>
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
  data() {
    return {
      backFlag: false
    }
  },
  mounted() {
    this.$store.dispatch('fetchArticles'),
    this.$store.dispatch('fetchRearing'),
    window.addEventListener('scroll', this.showBtn)
  },
  methods: {
    showBtn() {
      let that = this;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      that.scrollTop = scrollTop;
      if(that.scrollTop > 80) {
        let that = this;
        that.backFlag = true;
      }else{
        that.backFlag =false;
      }
    },
    backTop() {
    let that = this 
    let timer = setInterval(() => { 
    let speed = Math.floor(-that.scrollTop /10)
    //scrollTop獲取元素的滾動條的垂直位置，Math.floor() 向下取整
    document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + speed
    //document.documentElement.scrollTop 獲取當前頁面的滾動條縱坐標位置
    if (that.scrollTop === 0) {
      clearInterval(timer) }
      }, 20)

    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.showBtn);
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
// *{
//   padding: 0;
//   margin: 0;
//   list-style: none;
//   box-sizing: border-box;
// }
.box{
  position: fixed;
  top: 80%;
  right: 15px;
  z-index: 100;
  a{
    text-decoration: none;
    display: block;
    height: 40px;
    width: 40px;
    background-color: rgb(130, 130, 130);
    border-radius: 10px;
    position: relative;
    &:hover{
      background-color: #33aaff;
    }
    .icon{
    background: {
            image: url('./assets/icon/up.png');
            repeat: no-repeat;
            position: center;
            size: cover;
        }
    width: 20px;
    height: 20px;
    display: block;
    position: absolute;
    top: 10px;
    left: 10px;
  }
  }
}
</style>
