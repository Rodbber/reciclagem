import router from './router'
import vuetify from './vuetify';

import App from './App.vue'
import Vue from 'vue';

Vue.component('app-vue', App)


const app = new Vue({
    el: '#app',
    router,
    vuetify,
})
