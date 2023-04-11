<template>
  <!-- <HelloWorld /> -->
  <v-container>
    <v-card class="mx-auto pb-2">
      <v-card-item>
        <v-card-title class="mb-2"><v-icon icon="mdi-magnify-expand" class="mr-2"></v-icon>조회 조건</v-card-title>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12" md="4" class="py-0">
                <v-text-field
                  v-model="firstname"
                  density="compact"
                  :rules="nameRules"
                  :counter="10"
                  label="쿠폰번호"
                  required></v-text-field>
              </v-col>

              <v-col cols="12" md="4" class="py-0">
                <v-text-field
                  v-model="lastname"
                  density="compact"
                  :rules="nameRules"
                  :counter="10"
                  label="쿠폰명"
                  required></v-text-field>
              </v-col>

              <v-col cols="12" md="4" class="py-0">
                <v-text-field
                  v-model="email"
                  density="compact"
                  :rules="emailRules"
                  label="E-mail"
                  required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4" class="py-0">
                <v-combobox
                  v-model="comboValue1"
                  chips
                  clearable
                  density="compact"
                  :items="combo1"
                  label="등록지점"></v-combobox>
              </v-col>
              <v-col cols="12" md="4" class="py-0">
                <v-combobox
                  v-model="comboValue2"
                  chips
                  clearable
                  density="compact"
                  :items="combo1"
                  label="적용대상유형"></v-combobox>
              </v-col>
              <v-col cols="12" md="4" class="py-0">
                <v-combobox
                  v-model="comboValue3"
                  chips
                  clearable
                  density="compact"
                  :items="combo1"
                  label="쿠폰유형"></v-combobox>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4" class="py-0">
                <v-text-field density="compact" label="판매코드"></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="py-0">
                <v-text-field density="compact" label="상품명"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-item>
      <v-card-actions class="flex-row-reverse px-8">
        <v-btn variant="outlined" prepend-icon="mdi-text-search" block>조회</v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="mt-4">
      <v-card-item>
        <v-card-title class="mb-2"
          ><v-icon icon="mdi-format-list-bulleted-type" class="mr-2"></v-icon>M쿠폰 목록</v-card-title
        >
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="desserts"
          item-value="name"
          show-select
          class="elevation-1">
          <!-- eslint-disable-next-line vue/valid-v-slot -->
          <template v-slot:item.calories="{ item }">
            <v-chip :color="getColor(item.raw.calories)">
              {{ item.raw.calories }}
            </v-chip>
          </template>
        </v-data-table>
      </v-card-item>
      <v-card-actions class="justify-end">
        <v-btn size="small" variant="tonal">엑셀양식</v-btn>
        <v-btn size="small" variant="tonal">엑셀업로드</v-btn>
        <v-btn size="small" variant="tonal">엑셀다운</v-btn>
        <v-btn size="small" variant="tonal"><div class="text-red">삭제</div></v-btn>
        <v-btn size="small" variant="tonal"><div class="text-light-blue">등록</div> </v-btn>
        <v-btn size="small" variant="tonal"><div class="text-teal">복사</div></v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable';
</script>
<script>
// Vuetify 예제(OptionsAPI사용)를 가져와서 를 사용했으나, 실제 구현시에는 ComposibleAPI를 사용해야 함
export default {
  methods: {
    getColor(calories) {
      if (calories > 400) return 'red';
      else if (calories > 200) return 'orange';
      else return 'green';
    },
  },
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      value => {
        if (value) return true;

        return 'Name is requred.';
      },
      value => {
        if (value?.length <= 10) return true;

        return 'Name must be less than 10 characters.';
      },
    ],
    email: '',
    emailRules: [
      value => {
        if (value) return true;

        return 'E-mail is requred.';
      },
      value => {
        if (/.+@.+\..+/.test(value)) return true;

        return 'E-mail must be valid.';
      },
    ],
    combo1: ['데이타1', '데이타2', '데이타3', '데이타4', '데이타5', '데이타6', '데이타7', '데이타8', '데이타9'],
    comboValue1: '',
    combo2: ['데이타1', '데이타2', '데이타3', '데이타4', '데이타5', '데이타6', '데이타7', '데이타8', '데이타9'],
    comboValue2: '',
    combo3: ['데이타1', '데이타2', '데이타3', '데이타4', '데이타5', '데이타6', '데이타7', '데이타8', '데이타9'],
    comboValue3: '',

    selected: [],
    headers: [
      {
        title: 'Dessert (100g serving)',
        align: 'start',
        sortable: false,
        key: 'name',
      },
      { title: 'Calories', key: 'calories' },
      { title: 'Fat (g)', key: 'fat' },
      { title: 'Carbs (g)', key: 'carbs' },
      { title: 'Protein (g)', key: 'protein' },
      { title: 'Iron (%)', key: 'iron' },
    ],
    desserts: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: 1,
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: 1,
      },
      {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: 7,
      },
      {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: 8,
      },
      {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: 16,
      },
      {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: 0,
      },
      {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: 2,
      },
      {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: 45,
      },
      {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: 22,
      },
      {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: 6,
      },
      {
        name: 'Frozen Yogurt2',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: 1,
      },
      {
        name: 'Ice cream sandwich2',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: 1,
      },
      {
        name: 'Eclair2',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: 7,
      },
      {
        name: 'Cupcake2',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: 8,
      },
      {
        name: 'Gingerbread2',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: 16,
      },
      {
        name: 'Jelly bean2',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: 0,
      },
      {
        name: 'Lollipop2',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: 2,
      },
      {
        name: 'Honeycomb2',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: 45,
      },
      {
        name: 'Donut2',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: 22,
      },
      {
        name: 'KitKat2',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: 6,
      },
    ],
  }),
};
</script>
