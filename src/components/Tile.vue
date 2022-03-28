<script setup lang="ts">
import { getTileImagePath } from '~/logic'
import type { Tile } from '~/types'
const props = defineProps<{
  tile: Tile
}>()

const url = computed(() => getTileImagePath(props.tile))
</script>

<template>
  <div>
    <img w10 :src="url">
  </div>
</template>
