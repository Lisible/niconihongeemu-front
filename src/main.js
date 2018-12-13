import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const Home = {
    template: `
        <search-bar></search-bar>
        <deck-dashboard></deck-dashboard>
    `
}

const routes = {
    '/': Home
}

new Vue({
  render: h => h(App),
}).$mount('#app')
