import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Numbers from '../pages/Numbers.vue';
import Adding from '../pages/AddingNumber.vue';

const router = new VueRouter({
   pageRouting: true,
   routes: [
      {
         path: '/numbers',
         component: Numbers
      },
      {
         path: '/add-number',
         component: Adding
      },
      {
         path: '*',
         redirect: '/numbers'
      },
   ],
});

router.replace('/numbers');

module.exports = router;