<script setup>
// import { RouterView } from 'vue-router'
import { ref, watch } from 'vue'

const count = ref(0)

watch(count, (newCount, oldCount) => {
  console.log(`${oldCount}, ${newCount}`)
})
</script>

<template>
  <div>
    <button @click="count++">increment</button>
    <p>count : {{ count }}</p>
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
