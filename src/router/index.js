// Composables
import { createRouter, createWebHistory } from 'vue-router';
import axios from 'axios';
import PageB from '@/views/PageB.vue';

// const getPosts = async () => {
//   const res = await axios.get('/pages');
//   console.log('=================route')
//   console.log('res : ', res);
// }

import { storeToRefs } from 'pinia';
import { useMenusStore } from '@/store/menus';
// const menusStore = useMenusStore();
// // const { setMenus } = menusStore;
// const { menus: storedMenus } = storeToRefs(menusStore);
// console.log('menus : ', storedMenus.value);

// getPosts()
// const menus = sessionStorage.getItem('menus');
// console.log('router index================================');
// console.log('menus : ', menus);



const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    name: 'root',
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'PageA',
        name: 'PageA',
        component: () => import('@/views/PageA.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
  },
];

// const menusFromSessionStorage = sessionStorage.getItem('menus');
// let newRoutes;
// if(menusFromSessionStorage){
//   newRoutes = JSON.parse(menusFromSessionStorage);
//   newRoutes.map(item=>{
//     if (!item.isGroup) {
//       routes[0].children.push({path:item.name, name:item.name,component: () => import(`@/views/${item.name}.vue`) });
//     }
//   })
// }

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
