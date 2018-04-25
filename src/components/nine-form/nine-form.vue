<template>
  <div class="content">
    <div class="row">
      <div class="row-item">
        <router-link tag="div" class="row-item" to="/nine-form">
          <img src="../../assets/logo.png" alt="">
          <p>功能1</p>
        </router-link>
      </div>
      <div class="row-item">
        <router-link tag="div" class="row-item" to="/nine-form">
          <img src="../../assets/logo.png" alt="">
          <p>功能2</p>
        </router-link>
      </div>
      <div class="row-item">
        <router-link tag="div" class="row-item" to="/bmap">
          <img src="../../assets/logo.png" alt="">
          <p>功能3</p>
        </router-link>
      </div>
      <div class="row-item">
        <router-link tag="div" class="row-item" to="/bmap">
          <img src="../../assets/logo.png" alt="">
          <p>功能4</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .content
    margin-top 45px
    .row
      display flex
      flex-wrap nowrap
      justify-content center
      align-items center
      .row-item
        flex-grow 1
        display flex
        flex-direction column
        justify-content center
        align-items center
        img
          width 50%
        p
          color #666666
</style>
