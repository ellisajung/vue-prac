<script setup>
// import { RouterView } from 'vue-router'
import { ref } from 'vue'
const flip = ref(false)
const type = ref('')
const show = ref(false)
const isLoggedin = ref(false)
const info = ref({ name: '사과', email: '바나나', phone: '수박' })
const fruits = ref(['사과', '체리', '바나나', '포도'])
const foods = ref([
  { name: '떡볶이', type: '분식' },
  { name: '마라탕', type: '중식' },
  { name: '우동', type: '일식' },
  { name: '파스타', type: '양식' }
])
const langs = ref(['한국어', '영어', '불어', '스페인어'])
</script>

<template>
  <div class="test">
    <h1>This is a Test page</h1>
    <div>
      <button @click="flip = !flip">동전 뒤집기</button>
      <div v-if="flip">앞</div>
      <div v-else>뒤</div>
    </div>
    <div>
      <button @click="type = 'A'">type</button>
      <button @click="type = 'B'">type</button>
      <button @click="type = 'C'">type</button>
      <button @click="type = 'D'">type</button>
      <div v-if="type === 'A'">A</div>
      <div v-else-if="type === 'B'">B</div>
      <div v-else-if="type === 'C'">C</div>
      <div v-else>ABC 아님</div>
    </div>
    <div>
      <button @click="show = !show">show</button>
      <div v-show="show">show</div>
    </div>
    <div>
      <button @click="isLoggedin = !isLoggedin">{{ isLoggedin ? '로그아웃' : '로그인' }}</button>
      <div>{{ isLoggedin ? '안녕하세요!' : '로그인 해주세요' }}</div>
    </div>
    <ul>
      <li v-for="(v, i) in info" :key="i">{{ i }} : {{ v }}</li>
    </ul>
    <ul>
      <li v-for="(v, i) in fruits" :key="i">{{ i + 1 }}. {{ v }}</li>
    </ul>
    <ul>
      <li v-for="(v, k) in foods" :key="k">{{ v.name }} : {{ v.type }}</li>
    </ul>
    <ul>
      <li v-for="(v, i) in langs" :key="i">{{ i + 1 }}. {{ v }}</li>
    </ul>
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
