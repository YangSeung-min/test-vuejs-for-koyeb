<template>
  <!-- <HelloWorld /> -->
  <v-container class="bg-grey-lighten-2">
    <v-row>
      <v-col class="mt-2" cols="12">
        <div id="jml">
        </div>
      </v-col>
      <template v-for="n in 4" :key="n">
        <v-col class="mt-2" cols="12">
          <strong>Category {{ n }}</strong>
        </v-col>

        <v-col v-for="j in 6" :key="`${n}${j}`" cols="6" md="2">
          <v-sheet height="150"></v-sheet>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script setup>
// import HelloWorld from '@/components/HelloWorld.vue'

window.addEventListener("message", (event) => {
  // Do we trust the sender of this message?

  console.log('event.origin : ', event.origin);
  console.log('event.data : ', event.data)

  document.getElementById("jml").innerHTML = `msg from JML : ${event.data}`;

});

</script>

