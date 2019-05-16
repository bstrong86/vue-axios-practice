import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Login from './components/Login'

Vue.config.productionTip = false

const Login = {template: '<p>{{Login}}</p>'}

const routes = {
  '/login': Login,
  // '/register': Register
}

new Vue({
  el: '#app',

  data:{
    currentRoute: window.location.pathname
  },

  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound
    }
  },

  router,
  render: h => h(this.ViewComponent)
})
