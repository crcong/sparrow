<script setup lang="ts">
import type { Tile } from '~/types'
const props = defineProps<{
  tiles: Tile[]
}>()
</script>

<template>
  <div mt4 flex="~ gap-3">
    <Tile v-for="tile, i in props.tiles" :key="i" :tile="tile" />
  </div>
</template>
