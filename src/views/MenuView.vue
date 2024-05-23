<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
const text = ref('')
const types = ref(['한식', '중식', '일식', '양식', '기타'])
const selected = ref('')
const typeSelected = ref('')
const foods = ref([])
</script>

<template>
  <div class="test">
    <h1>This is a Test page</h1>
    <div>
      <p>음식 이름:</p>
      <input v-model="text" placeholder="음식 이름 입력" />
    </div>
    <div>
      <p>음식 종류:</p>
      <select v-model="selected">
        <option disabled value="">음식 종류 선택</option>
        <option v-for="(type, i) in types" :key="i">{{ type }}</option>
      </select>
      <button @click="foods.push({ name: text, type: selected })">추가</button>
    </div>
    <div>
      <p>필터:</p>
      <select v-model="typeSelected">
        <option disabled value="" />
        <option v-for="(type, i) in types" :key="i">{{ type }}</option>
      </select>
    </div>
    <div>
      <ul>
        <li v-if="!!typeSelected">{{ v.name }}:{{ v.type }}</li>
        <li v-else>
          {{ typeSelected === v.type ? v.name + ':' + v.type : v.name + ':' + v.type }}
        </li>
      </ul>
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
