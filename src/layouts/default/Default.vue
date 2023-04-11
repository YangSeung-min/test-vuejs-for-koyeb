<template>
  <v-app>
    <!-- <v-card>
      <v-layout> -->
    <default-bar />
    <nav-drawer />
    <default-view />
    <!-- </v-layout>
    </v-card> -->
  </v-app>
</template>
<style>
#lnb .small-padding {
  padding-left: 30px !important;
}
</style>

<script>
export default {
  data: () => ({ drawer: null }),
}
</script>
<script setup>
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
import NavDrawer from './NavDrawer.vue'
</script>
