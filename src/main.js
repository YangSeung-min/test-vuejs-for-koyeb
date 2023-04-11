/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import { createApp } from 'vue';
import App from './App.vue';
// import axios from 'axios';
// Plugins
import { registerPlugins } from '@/plugins';

// const getRoutes = async () => {
//   await axios
//     .get('/pages')
//     .then(res => {
//       const { data } = res;
//       sessionStorage.setItem('menus', JSON.stringify(data));
//     })
//     .catch(e => {
//       console.error(e);
//       sessionStorage.setItem('menus', JSON.stringify([{ name: 'PageA', isGroup: false }]));
//     })
//     .finally(() => {
//       console.info('페이지 새로고침');
//       window.location.reload();
//     });
// };

// const menus = sessionStorage.getItem('menus');
// if (!menus) {
//   getRoutes();
// }

const app = createApp(App);
registerPlugins(app);
app.mount('#app');
