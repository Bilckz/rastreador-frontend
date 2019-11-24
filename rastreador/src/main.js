import Vue from 'vue'
import vuetify from './plugins/vuetify';
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import VueCompositionApi from "@vue/composition-api";
 
Vue.use(VueCompositionApi);
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({ 
  routes
});

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  vuetify,
  render: h => h(App)
})