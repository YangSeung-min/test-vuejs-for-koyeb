<template>
  <!-- <v-app-bar title="Application bar">

    <v-btn @click="toggleTheme">toggle theme</v-btn>

  </v-app-bar> -->
  <v-system-bar>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-app-bar>
      <v-app-bar-nav-icon @click="toggleLnb"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
      <v-btn @click="toggleTheme">toggle theme</v-btn>

    </v-app-bar>
</template>

<script setup>
import { useTheme } from 'vuetify'
import { useAppStore } from '@/store/app';

// theme
const theme = useTheme();
const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';

// store
const store = useAppStore();
const { toggleLnb } = store;

</script>
