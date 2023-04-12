/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { md2 } from 'vuetify/blueprints';

// Composables
import { createVuetify } from 'vuetify';

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint: md2,
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          primary: '#3F51B5',
          secondary: '#5CBBF6',
        },
      },
      dark: {
        colors: {
          primary: '#FFE57F',
          secondary: '#03A9F4',
        },
      },
    },
  },
});
