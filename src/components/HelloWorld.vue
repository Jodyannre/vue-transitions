<template>
  <button @click="show = !show"> Mostrar | Ocultar</button>
  <transition>
    <h1 v-if="show"> Hello world </h1>
  </transition>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const show = ref(false);

</script>

<style lang="scss">

.v-enter-active, .v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
</style>
