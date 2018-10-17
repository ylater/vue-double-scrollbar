import vueDoubleScrollbar from  './lib/double-scrollbar.vue';

vueDoubleScrollbar.install = function(Vue) {
  Vue.component('vue-double-scrollbar', vueDoubleScrollbar)
}

const install = function (Vue) {
   Vue.component('vue-double-scrollbar', vueDoubleScrollbar)
}

if (typeof window !== 'undefined' && window.Vue) {
   install(window.Vue)
}

export default vueDoubleScrollbar