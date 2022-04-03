<script setup lang="ts">
import { question } from '~/logic'
</script>

<template>
  <Header />
  <div flex="~ col" items-center>
    <Question :tiles="question.q" />
    <Answer :tiles="question.a" :tile-type="question.kindType" />
    <Status />
    <Result />
  </div>
</template>
