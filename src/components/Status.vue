<script setup lang="ts">
import { counter, stage } from '~/logic'
</script>

<template>
  <div mt10 min-w-70 flex justify-between>
    <div>第 {{ stage }} 关</div>
    <div>用时：{{ counter }}s</div>
  </div>
</template>
