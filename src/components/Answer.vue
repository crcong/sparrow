<script setup lang="ts">
import {
  generateTilesByKindType,
  checkAnswer,
  promiseTimeout,
  WRONG_ANIMATION_DURATION,
  stage,
  question,
  startGame,
  MAX_STAGE,
  pauseCounter,
} from '~/logic'
import type { Tile, TileType } from '~/types'
const props = defineProps<{
  tiles: Tile[],
  tileType: TileType
}>()
let selected = $ref<Tile[]>([])
const answers = $computed(() => generateTilesByKindType(props.tileType))
const selectWrap = $ref<HTMLDivElement>()
const answerWrap = $ref<HTMLDivElement>()
const styleMap = $ref(new WeakMap())

let isWrong = $ref(false)

let stopShakeX: () => void | undefined
async function submitAnswer() {
  if (checkAnswer(props.tiles, selected)) {
    if (stage.value === MAX_STAGE) {
      pauseCounter()
      alert('success!!!')
      return
    }
    stage.value++
    selected = []
    question.value = startGame(stage.value)
  } else {
    if (isWrong) {
      isWrong = false
      stopShakeX()
      await promiseTimeout(0)
    }
    isWrong = true
    const { stop } = useTimeoutFn(() => {
      isWrong = false
    }, WRONG_ANIMATION_DURATION)
    stopShakeX = stop
  }
}

function calcStyle() {
  answers.forEach((t, i) => {
    const selectedIndex = selected.findIndex(a => a.type === t.type && a.value === t.value)
    if (selectedIndex > -1) {
      const selectEl = selectWrap.children[selectedIndex] as HTMLElement
      const selectElLeft = selectEl.offsetLeft
      const selectElTop = selectEl.offsetTop
      const answerEl = answerWrap.children[i] as HTMLElement
      const answerElLeft = answerEl.offsetLeft
      const answerElTop = answerEl.offsetTop

      styleMap.set(t, {
        transform: `translate(${-(answerElLeft - selectElLeft)}px, ${-(answerElTop - selectElTop)}px)`,
      })
    } else {
      styleMap.set(t, {})
    }
  })
}

function getStyle(tile: Tile) {
  return styleMap.get(tile)
}

async function selectTile(tile: Tile) {
  if (!selected.includes(tile)) {
    selected.push(tile)
  } else {
    selected.splice(selected.indexOf(tile), 1)
  }
  await nextTick()
  calcStyle()
}
</script>

<template>
  <div mt3>
    <div border="b #ccc">
      <div ref="selectWrap" mt4 flex="~ gap-3" min-h-20 min-w-20>
        <Tile v-for="tile, i in selected" :key="i" opacity-0 select-none :tile="tile" />
      </div>
    </div>

    <div w60>
      <div ref="answerWrap" mt10 flex="~ gap-10 wrap" justify-center>
        <Tile
          v-for="tile, i in answers"
          :key="i"
          transition-transform
          :tile="tile"
          :style="getStyle(tile)"
          @click="selectTile(tile)"
        />
      </div>
    </div>
  </div>

  <button
    mt12
    btn
    p="x6 y2"
    :class="isWrong ? 'animate-shakeX' : ''"
    :disabled="selected.length === 0" @click="submitAnswer"
  >
    确 定
  </button>
</template>
