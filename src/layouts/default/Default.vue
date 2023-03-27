<template>
  <v-app>


    <v-card>
      <v-layout>
        <default-bar />

        <v-navigation-drawer id="lnb" width="300" v-model="isLnbOpen">

          <v-card class="mx-auto ">
            <v-list v-model:opened="open">
              <v-list-item prepend-icon="mdi-home" title="Home" @click="goHome"></v-list-item>
              <v-list-item prepend-icon="mdi-phone" title="pageA" @click="goPageA"></v-list-item>
              <v-list-item prepend-icon="mdi-flower" title="pageB" @click="goPageB"></v-list-item>
              <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Users"></v-list-item>
              <v-list-group value="Admin">
                <template v-slot:activator="{ props }">
                  <v-list-item prepend-icon="mdi-flower" v-bind="props" title="Admin"></v-list-item>
                </template>

                <v-list-item class="small-padding" v-for="([title, icon], i) in admins" :key="i" :title="title" :prepend-icon="icon"
                  :value="title"></v-list-item>
              </v-list-group>

              <v-list-group value="Actions">
                <template v-slot:activator="{ props }">
                  <v-list-item prepend-icon="mdi-flower" v-bind="props" title="Actions"></v-list-item>
                </template>

                <v-list-item class="small-padding" v-for="([title, icon], i) in cruds" :key="i" :value="title" :title="title"
                  :prepend-icon="icon"></v-list-item>
              </v-list-group>


              <v-list-group value="Actions2">
                <template v-slot:activator="{ props }">
                  <v-list-item prepend-icon="mdi-flower" v-bind="props" title="Actions"></v-list-item>
                </template>

                <v-list-item class="small-padding" v-for="([title, icon], i) in cruds" :key="i" :value="title" :title="title"
                  :prepend-icon="icon"></v-list-item>
              </v-list-group>


              <v-list-group value="Actions3">
                <template v-slot:activator="{ props }">
                  <v-list-item prepend-icon="mdi-flower" v-bind="props" title="Actions"></v-list-item>
                </template>

                <v-list-item class="small-padding" v-for="([title, icon], i) in cruds" :key="i" :value="title" :title="title"
                  :prepend-icon="icon"></v-list-item>
              </v-list-group>
                            <v-list-group value="Actions4">
                <template v-slot:activator="{ props }">
                  <v-list-item prepend-icon="mdi-flower" v-bind="props" title="Actions"></v-list-item>
                </template>

                <v-list-item class="small-padding" v-for="([title, icon], i) in cruds" :key="i" :value="title" :title="title"
                  :prepend-icon="icon"></v-list-item>
              </v-list-group>
            </v-list>
          </v-card>
        </v-navigation-drawer>
        <default-view />
      </v-layout>
    </v-card>


  </v-app>
</template>
<style>

#lnb .small-padding {
  padding-left: 30px !important;
}
</style>

<script>
// export default {
//   data: () => ({
//     open: ['Users'],
//     admins: [
//       ['Management', 'mdi-account-multiple-outline'],
//       ['Settings', 'mdi-cog-outline'],
//     ],
//     cruds: [
//       ['Create', 'mdi-plus-outline'],
//       ['Read', 'mdi-file-outline'],
//       ['Update', 'mdi-update'],
//       ['Delete', 'mdi-delete'],
//     ],
//   }),
// }
export default {
  data: () => ({ drawer: null }),
}
</script>
<script setup>
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia';

// store
const store = useAppStore();
const { isLnbOpen } = storeToRefs(store);

const router = useRouter();
const open = ref(['Users']);
const admins = ref([
  ['Management', 'mdi-account-multiple-outline'],
  ['Settings', 'mdi-cog-outline'],
]);
const cruds = ref([
  ['Create', 'mdi-plus-outline'],
  ['Read', 'mdi-file-outline'],
  ['Update', 'mdi-update'],
  ['Delete', 'mdi-delete'],
]);


console.log('isLnbOpen :', isLnbOpen.value)
const goPageA = () => router.push({ name: 'PageA' });
const goPageB = () => router.push({ name: 'PageB' });
const goHome = () => router.push({ name: 'Home' });
</script>
