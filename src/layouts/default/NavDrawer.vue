<template>
  <v-navigation-drawer id="lnb" width="300" v-model="isLnbOpen">
    <v-card class="mx-auto">
      <v-list>
        <v-list-item prepend-icon="mdi-home" title="Home" @click="goHome"></v-list-item>
        <v-list-item prepend-icon="mdi-phone" title="pageA" @click="goPageA"></v-list-item>
        <v-list-item prepend-icon="mdi-flower" title="pageB" @click="goPageB"></v-list-item>
        <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Users"></v-list-item>
        <v-list-group value="Admin">
          <template v-slot:activator="{ props }">
            <v-list-item prepend-icon="mdi-flower" v-bind="props" title="Admin"></v-list-item>
          </template>
          <v-list-item
            class="small-padding"
            v-for="([title, icon], i) in admins"
            :key="i"
            :title="title"
            :prepend-icon="icon"
            :value="title"></v-list-item>
        </v-list-group>
        <v-list-group value="Actions1">
          <template v-slot:activator="{ props }">
            <v-list-item prepend-icon="mdi-flower" v-bind="props" title="Actions1"></v-list-item>
          </template>
          <v-list-item
            class="small-padding"
            v-for="([title, icon], i) in cruds"
            :key="i"
            :value="title"
            :title="title"
            :prepend-icon="icon"></v-list-item>
        </v-list-group>
        <v-list-group value="Actions2">
          <template v-slot:activator="{ props }">
            <v-list-item prepend-icon="mdi-flower" v-bind="props" title="Actions2"></v-list-item>
          </template>
          <v-list-item
            class="small-padding"
            v-for="([title, icon], i) in cruds"
            :key="i"
            :value="title"
            :title="title"
            :prepend-icon="icon"></v-list-item>
        </v-list-group>
        <v-list-group value="Actions3">
          <template v-slot:activator="{ props }">
            <v-list-item prepend-icon="mdi-flower" v-bind="props" title="Actions3"></v-list-item>
          </template>
          <v-list-item
            class="small-padding"
            v-for="([title, icon], i) in cruds"
            :key="i"
            :value="title"
            :title="title"
            :prepend-icon="icon"></v-list-item>
        </v-list-group>
        <v-list-group value="Actions4">
          <template v-slot:activator="{ props }">
            <v-list-item prepend-icon="mdi-flower" v-bind="props" title="Actions4"></v-list-item>
          </template>
          <v-list-item
            class="small-padding"
            v-for="([title, icon], i) in cruds"
            :key="i"
            :value="title"
            :title="title"
            :prepend-icon="icon"></v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia';

const router = useRouter();

// store
const store = useAppStore();
const { isLnbOpen } = storeToRefs(store);

// const open = ref(['Users']);
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

console.log('isLnbOpen :', isLnbOpen.value);
const goPageA = () => router.push({ name: 'PageA' });
const goPageB = () => router.push({ name: 'PageB' });
const goHome = () => router.push({ name: 'Home' });
</script>
