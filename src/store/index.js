import Vue from 'nativescript-vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
   state: {
      numbers: [
         {
            id: 0,
            name: 'Valera',
            number: '8 800 555 35 35'
         },
         {
            id: 1,
            name: 'Petya',
            number: '8 800 555 35 33'
         }
      ]
   },
   mutations: {
      addNumber(state, {name, number}) {
         state.numbers.push({
            id: state.numbers.length,
            name,
            number
         });
      }
   },
   getters: {
      numbers(state) {
         return state.numbers;
      }
   },
   strict: debug,
});

Vue.prototype.$store = store;

module.exports = store;