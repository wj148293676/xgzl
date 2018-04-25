<template>
  <div id="allmap" v-bind:style="{ height: winHeight + 'px' }"></div>
</template>
<script>
import BMap from 'BMap'
export default {
  data: function() {
    return {
      winHeight: document.documentElement.clientHeight - 45
    }
  },
  props: {
    // 地图在该视图上的高度
    mapHeight: {
      type: Number,
      default: 500
    },
    // 经度
    longitude: {
      type: Number,
      default: 116.404
    },
    // 纬度
    latitude: {
      type: Number,
      default: 39.915
    },
    description: {
      type: String,
      default: '天安门'
    }
  },
  mounted: function() {
    var map = new BMap.Map('allmap', {enableMapClick: true})
    map.centerAndZoom(new BMap.Point(116.4035, 39.915), 11)
    map.addControl(new BMap.MapTypeControl())
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #allmap
    width 100%
    margin-top 44px
</style>
