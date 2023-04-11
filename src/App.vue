<template>
  <!-- <AppLoading v-if="loading" />
  <router-view v-else /> -->
  <router-view />
  <!-- <Default></Default> -->
  
</template>
<script setup>
// import { watch } from 'vue';
// import { useAxios } from '@/composables/useAxios';
// import router from '@/router/index';
// import AppLoading from './components/AppLoading.vue';

// store
// import { storeToRefs } from 'pinia';
// import { useMenusStore } from '@/store/menus';
// import Default from '@/layouts/default/Default.vue';
// const menusStore = useMenusStore();
// const { setMenus } = menusStore;
// const { menus } = storeToRefs(menusStore);
// const { data: pages, error, loading } = useAxios('/pages');
// console.log('error : ', error.value);

// const registerPage = page => {
//   router.addRoute('root', {
//     name: page,
//     path: `/${page}`,
//     component: () => import(`@/views/${page}.vue`),
//   });
// };

// watch(pages, pages => {
//   if (pages) {
//     console.log('app===========================================');
//     pages.map(item => {

//       console.log('item : ', item);
//       // 페이지
//       if (!item.isGroup) {
//         console.log('item.name : ', item.name);
//         registerPage(item.name);
//       } else {
//         // item.children.map(nestedItem => {
//         //   registerPage(nestedItem.name);
//         // });
//       }
//       setMenus(item.name);
//     });
//   }
//   console.log('router.getRoutes() : ', router.getRoutes());
//   console.log('stored menus : ', menus);
// });
</script>
