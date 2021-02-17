<template>
  <div id="app">
    <div class="header"><TheHeader :shrink="shrink" :move="move" :shrinkMenu="shrinkMenu"></TheHeader></div>
    <div class="main">
      <transition name="route" mode="out-in">
      <router-view></router-view>
      </transition>
    </div>
    <div class="footer"><TheFooter></TheFooter></div>
    <div class="box" @click="backTop" v-show="showBtn">
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
      showBtn: false,
      shrink:false,
      shrinkMenu:false,
      move:false,
    }
  },
  provide(){
    return{
      shrinkMenu:this.shrinkMenu,
      shrink:this.shrink,
      move:this.move
    }
  },
  mounted() {
    this.$store.dispatch('fetchArticles'),
    this.$store.dispatch('fetchRearing'),
    window.addEventListener('scroll', this.headerShrink)
  },
  methods: {
    headerShrink(){
      let that = this;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let screenWidth = document.body.clientWidth
      that.scrollTop = scrollTop;
      if(that.scrollTop > 80 && screenWidth < 870) {
          let that = this;
          that.shrink = true;
          that.shrinkMenu = true;
          that.showBtn = true
      }else if(that.scrollTop > 80 && screenWidth > 870){
          let that = this;
          that.shrink = true;
          that.move = true;
          that.showBtn = true;
      }else{
          that.shrink = false;
          that.shrinkMenu = false;
          that.move = false;
          that.showBtn = false;
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
    window.removeEventListener('scroll', this.headerShrink);
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

.route-enter{
  opacity: 0;
  transform: translateX(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.route-enter-active{
  transition: all .5s ease-out;
} 
.route-leave-active{
  transition: all .5s ease-in;
} 
// .sub-enter{
//   opacity: 0;
//   transform: translateY(-30px);
// }
// .sub-enter-active{
//   transition: all 1s ease-out;
// }
// 
</style>
