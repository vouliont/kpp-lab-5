import Vue from 'nativescript-vue';
import router from './router';
import store from './store';
import '../node_modules/nativescript-theme-core/css/sky.android.css';

// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

new Vue({
   router,
   store
}).$start();
