<script setup lang="ts">
import { generateTilesByKindType, checkAnswer } from '~/logic'
import type { Tile, TileType } from '~/types'
const props = defineProps<{
  tiles: Tile[],
  tileType: TileType
}>()
const selected = reactive<Tile[]>([])
const answers = generateTilesByKindType(props.tileType)

function submitAnswer() {
  const data = checkAnswer(props.tiles, selected)
  if (data.correct) {
    alert('Correct!')
  } else {
    alert('Incorrect!')
  }
}
</script>

<template>
  <div mt3>
    <div border="b #ccc">
      <div mt4 flex="~ gap-3" min-h-20 min-w-20>
        <Tile v-for="tile, i in selected" :key="i" :tile="tile" />
      </div>
    </div>

    <div w60>
      <div mt10 flex="~ gap-10 wrap" justify-center>
        <Tile
          v-for="tile, i in answers"
          :key="i" cursor-pointer
          :tile="tile"
          @click="!selected.includes(tile) && selected.push(tile)"
        />
      </div>
    </div>
  </div>

  <button
    mt12
    btn
    p="x6 y2"
    :disabled="selected.length === 0"
    @click="submitAnswer"
  >
    确 定
  </button>
</template>
