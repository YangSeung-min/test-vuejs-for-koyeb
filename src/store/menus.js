import { defineStore } from 'pinia';
// import router from '@/router/index';

export const useMenusStore = defineStore('menus', {
  state: () => ({
    menus: [],
  }),
  getters: {},
  actions: {
    setMenus(menus) {
      this.menus.push(menus);
    },
  },
});
