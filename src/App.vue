<template>
  <div id="app">
    <m-header></m-header>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
    <tab></tab>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
export default {
  name: 'App',
  components: {
    MHeader: MHeader,
    Tab: Tab
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-fade-enter-active
    transition all .3s ease
  .slide-fade-leave-active
    transition all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)
  .slide-fade-enter,.slide-fade-leave-active
    transform translateX(-430px)
    opacity 0
</style>
