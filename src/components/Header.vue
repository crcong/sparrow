<script setup lang="ts">
import { resetGame } from '~/logic'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <header>
    <div absolute top-4 left-4>
      <button icon-btn @click="toggleDark()">
        <div i-carbon-sun dark:i-carbon-moon />
      </button>
    </div>
    <div absolute top-4 right-4>
      <button icon-btn @click="resetGame()">
        <div i-carbon-rotate-360 />
      </button>
    </div>
  </header>
</template>
