<script setup lang="ts">
import { showRule } from '~/logic'
</script>

<template>
  <div h-100vh>
    <div absolute top-4 right-4 flex="~ gap-3" @click="showRule = !showRule">
      <button icon-btn>
        <div i-carbon-close />
      </button>
    </div>
    <div flex justify-center>
      <div text-2xl mt4>
        Sparrow
      </div>
    </div>
  </div>
</template>
