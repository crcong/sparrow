<script setup lang="ts">
import type { AnswerExposed } from '~/components/Answer.vue'
import confetti from 'canvas-confetti'
import {
  question,
  showRule,
  getQuestion,
  maxStage,
  pauseCounter,
  gameState,
  stage,
} from '~/logic'

const answer = $ref<AnswerExposed>()

onMounted(() => {
  watch(() => [gameState.value, stage.value], answer.clearSelectedTile)
})

function onCorrect() {
  if (stage.value === maxStage) {
    gameState.value = 2
    pauseCounter()
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
    return
  }
  stage.value++
  question.value = getQuestion(stage.value)
}
</script>

<template>
  <Header />
  <div flex="~ col" items-center>
    <Question :tiles="question.q" />
    <Answer
      ref="answer"
      :tiles="question.a"
      :tile-type="question.kindType"
      @on-correct="onCorrect"
    />
    <Status />
    <Result />
  </div>
  <Modal v-model="showRule" direction="top" :border="false">
    <Rule />
  </Modal>
</template>
