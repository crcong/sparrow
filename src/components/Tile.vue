<script setup lang="ts">
import type { Tile } from '~/types'
const props = defineProps<{
  tile: Tile
}>()

const url = computed(() => `../../public/images/${props.tile.type}.png`)
</script>

<template>
  <div>
    <img w10 :src="url">
  </div>
</template>
