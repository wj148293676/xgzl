<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/nine-form">
      <span class="tab-link">功能</span>
    </router-link>
    <div>|</div>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">我的</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tab
    width 100%
    position fixed
    bottom 0
    z-index 10
    display: flex
    height: 44px
    line-height: 44px
    font-size: $font-size-medium
    background-color #cccccc
    .tab-item
      flex: 1
      text-align: center
      .tab-link
        padding-bottom: 5px
        color: #666666
      &.router-link-active
        .tab-link
          color: #1874CD
          border-bottom: 2px solid #1874CD
</style>
