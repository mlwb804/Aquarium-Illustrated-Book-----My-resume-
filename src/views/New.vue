<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-2_5" v-for="item in items">
          <div class="row">
            <div class="dummy"></div>
            <div class="block"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items:['1','2','3','4','5','6','7','8','9']
    }
  },
}
</script>

<style lang="scss" scoped>
  @media (min-width:1140px) {
    .col-2_5 {
    flex: 0 0 20%;
    max-width: 20%;
}
  }
  .dummy{
    margin-top: 100%;
  }
  .block{
    position: absolute;
    top: 5px;
    right: 5px;
    left: 5px;
    bottom: 5px;
    background-color: red;
  }
  .col-2_5{
  }
</style>