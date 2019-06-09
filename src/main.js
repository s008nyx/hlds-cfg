// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// Vue.config.productionTip = false;
const cfg = () => {
  let app = document.querySelector('#app')
  if (app.dataset.config) {
    return app.dataset.config
  }
  return 'nope'
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App :cfg="cfg"/>',
  data: {
    cfg: cfg()
  }
})
