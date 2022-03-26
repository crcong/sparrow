<script setup lang="ts">
import { question } from '~/logic'
</script>

<template>
  <div pt8 flex="~ col" items-center>
    <h1 text-2xl>
      Sparrow
    </h1>
    <div w-10 border="b #ccc" mt4 />

    <Question :tiles="question.q" />
    <Answer :tiles="question.a" :tile-type="question.kindType" />
    <Status />
  </div>
</template>
