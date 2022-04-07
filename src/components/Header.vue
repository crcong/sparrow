<script setup lang="ts">
import { resetGame, showRule } from '~/logic'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <header flex="~ col" items-center pt2>
    <h1 text-2xl>
      Sparrow
    </h1>
    <div w-10 border="b #ccc" mt4 />
    <div absolute top-4 left-4>
      <button icon-btn @click="toggleDark()">
        <div i-carbon-sun dark:i-carbon-moon />
      </button>
    </div>
    <div absolute top-4 left-12>
      <button icon-btn @click="showRule = !showRule">
        <div i-carbon-help />
      </button>
    </div>
    <div absolute top-4 right-4>
      <button icon-btn @click="resetGame()">
        <div i-carbon-rotate-360 />
      </button>
    </div>
  </header>
</template>
