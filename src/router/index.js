import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const NineForm = (resolve) => {
  import('components/nine-form/nine-form').then((module) => {
    resolve(module)
  })
}
const BMap = (resolve) => {
  import('components/bmap/bmap').then((module) => {
    resolve(module)
  })
}
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/nine-form'
    },
    {
      path: '/nine-form',
      component: NineForm
    },
    {
      path: '/bmap',
      component: BMap
    }
  ]
})
