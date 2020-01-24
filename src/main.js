import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import * as fb from 'firebase'
import router from './router'
import store from './store'
import loadingComponent from './components/loader'

Vue.config.productionTip = false
Vue.component('loadingComponent', loadingComponent)

fb.initializeApp({
  apiKey: 'AIzaSyA8BMetJkxF8Yuz4sa4KD1ih6hgRFbrQLU',
  authDomain: 'ynherb22.firebaseapp.com',
  databaseURL: 'https://ynherb22.firebaseio.com',
  projectId: 'ynherb22',
  storageBucket: 'ynherb22.appspot.com',
  messagingSenderId: '833209840006',
  appId: '1:833209840006:web:8404fd5731ace86eddfc07'
})

let flag = true

fb.auth().onAuthStateChanged(user => {
  if (user) {
    store.commit('user/userAuth', user.uid)
  }
  if (flag) {
    flag = false
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
