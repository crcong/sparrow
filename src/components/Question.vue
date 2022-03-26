<script setup lang="ts">
import { stage } from '~/logic'
import type { Tile } from '~/types'
const props = defineProps<{
  tiles: Tile[]
}>()

let opacity = $ref(0)
let isNeedTransition = $ref(true)

function getAnimationStyle(i:number) {
  return {
    opacity,
    transition: isNeedTransition ? 'opacity .3s' : 'none',
    transitionDelay: `${i * 0.09}s`,
  }
}
watch(() => stage.value, async() => {
  opacity = 0
  isNeedTransition = false
  await nextTick()
  setTimeout(() => {
    isNeedTransition = true
    opacity = 1
  }, 0)
})

onMounted(() => {
  setTimeout(() => {
    opacity = 1
  }, 0)
})
</script>

<template>
  <div mt4 flex="~ gap-0.2">
    <Tile
      v-for="tile, i in props.tiles"
      :key="i"
      :tile="tile"
      opacity-0
      transition-opacity
      :style="getAnimationStyle(i)"
    />
  </div>
</template>
