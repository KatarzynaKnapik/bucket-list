import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from './firebase/init'
import store from './store/state'

Vue.config.productionTip = false

let app;
firebase.auth().onAuthStateChanged(user => {
  store.state.currentUser = user;
  if(!app){
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})

