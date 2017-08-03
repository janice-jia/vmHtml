// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'
import { AlertPlugin } from 'vux'

import App from './App'
import router from './router/index'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(AlertPlugin)

import vuexI18n from 'vuex-i18n'

let store = new Vuex.Store({
    modules: {
        i18n: vuexI18n.store
    }
})

sync(store, router)

Vue.use(vuexI18n.plugin, store)

// 添加Fastclick移除移动端点击延迟
FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.http.headers.common['os'] = 'web'

/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app-box')
