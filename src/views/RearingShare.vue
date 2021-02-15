<template>
  <div>
    <TheBanner title="文章分享"></TheBanner>
    <div class="container wrap">
      <div class="row no-gutters">
        <div class="item col-12 col-sm-9">
          <RearingItem></RearingItem>
          </div>
        <!-- <div class="col-1"></div> -->
        <RearingSideMenu class="col-sm-3 side-menu"></RearingSideMenu>
      </div>
    </div>
  </div>
</template>

<script>
import RearingSideMenu from '../components/ui/RearingSideMenu.vue';
import RearingItem from '../components/ui/RearingItem.vue';
export default {
  components:{
    RearingSideMenu,
    RearingItem
  }
}
</script>
<style lang="scss" scoped>
  .wrap{
    .item{
      margin: 1rem 0;
      padding: 1rem;
      // box-shadow:inset 1px 1px 3px rgba(0, 0, 0, .6);
    }
    .side-menu{
      display: none;
      margin:1rem 0;
    }
  }
  @media screen and (min-width:767px) {
    .wrap{
      .side-menu{
        display: block;
      }
    }
}
</style>