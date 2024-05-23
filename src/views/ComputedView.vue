<script setup>
// import { RouterView } from 'vue-router'
import { ref, computed } from 'vue'

const number1 = ref(5)
const number2 = ref(10)

const sum = computed(() => number1.value + number2.value)
</script>

<template>
  <div>
    <p>number1: <input v-model="number1" type="number" /></p>
    <p>number2: <input v-model="number2" type="number" /></p>
    <p>sum : {{ sum }}</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
