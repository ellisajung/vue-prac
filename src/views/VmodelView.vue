<script setup>
// import { RouterView } from 'vue-router'
import { ref } from 'vue'
const msg = ref('')
</script>

<template>
  <div class="test">
    <h1>This is a Test page</h1>
    <div>
      <input v-model="msg" placeholder="메세지를 입력하세요" />
      <p>입력한 메세지: {{ msg }}</p>
    </div>
    <RouterView />
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
