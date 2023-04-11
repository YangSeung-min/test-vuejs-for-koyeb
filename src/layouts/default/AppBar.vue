<template>
  <v-system-bar>
    <v-spacer></v-spacer>

    <div><v-breadcrumbs class="pa-0" :items="['홈', '쿠폰목록']"></v-breadcrumbs></div>
  </v-system-bar>

  <v-app-bar>
    <v-app-bar-nav-icon @click="toggleLnb"></v-app-bar-nav-icon>

    <v-toolbar-title class="text-red">Lotte <strong>Mart</strong></v-toolbar-title>
    <v-btn @click="toggleTheme"><v-icon icon="mdi-theme-light-dark" size="x-large"></v-icon></v-btn>
  </v-app-bar>
</template>

<script setup>
import { useTheme } from 'vuetify';
import { useAppStore } from '@/store/app';

// theme
const theme = useTheme();
const toggleTheme = () => (theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark');

// store
const store = useAppStore();
const { toggleLnb } = store;
</script>
