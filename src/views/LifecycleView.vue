<script setup>
import { ref, onBeforeMount, onMounted, onUpdated } from 'vue'
console.log('beforeCreate 호출됨')
const data = ref({ message: '' })
console.log('created 호출됨')
onBeforeMount(() => {
  console.log('onBeforeMount 호출됨')
})
onMounted(() => {
  data.value.message = '컴포넌트가 마운트되었습니다!'
  console.log('onMounted 호출됨')
})

const count = ref(0)
onBeforeMount(() => {
  console.log('onBeforeMount 호출됨')
})
onUpdated(() => {
  console.log('onUpdated 호출됨')
})
</script>

<template>
  <div>{{ data.message }}</div>
  <p>{{ count }}</p>
  <button @click="count++">Increment</button>
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
