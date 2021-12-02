/* eslint-disable */
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
//import DevExpress from 'devextreme'; "devextreme-vue";
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//import * as DxComponent from 'devextreme-vue';

Vue.config.productionTip = false



//Vue.use(dxDataGrid);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
