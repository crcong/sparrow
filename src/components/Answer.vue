<script setup lang="ts">
import confetti from 'canvas-confetti'
import {
  generateTilesByKindType,
  checkAnswer,
  promiseTimeout,
  WRONG_ANIMATION_DURATION,
  stage,
  question,
  startGame,
  maxStage,
  pauseCounter,
  selected,
  gameState,
} from '~/logic'
import type { Tile, TileType } from '~/types'
const props = defineProps<{
  tiles: Tile[],
  tileType: TileType
}>()
const answers = $computed(() => generateTilesByKindType(props.tileType))
const selectWrap = $ref<HTMLDivElement>()
const answerWrap = $ref<HTMLDivElement>()
const styleMap = $ref(new WeakMap())

let isWrong = $ref(false)

function onSuccess() {
  gameState.value = 2
  pauseCounter()
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  })
}

let stopShakeX: () => void | undefined
async function submitAnswer() {
  if (checkAnswer(props.tiles, selected.value)) {
    if (stage.value === maxStage) {
      onSuccess()
      return
    }
    stage.value++
    selected.value = []
    question.value = startGame(stage.value)
    await nextTick()
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
    const selectedIndex = selected.value.findIndex(a => a.type === t.type && a.value === t.value)
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
  if (!selected.value.includes(tile)) {
    selected.value.push(tile)
  } else {
    selected.value.splice(selected.value.indexOf(tile), 1)
  }
  await nextTick()
  calcStyle()
}

watch(() => stage.value, calcStyle)
</script>

<template>
  <div>
    <div border="b #ccc">
      <div ref="selectWrap" mt4 flex="~ gap-3" min-h-20 min-w-20>
        <Tile v-for="tile, i in selected" :key="i" opacity-0 select-none :tile="tile" />
      </div>
    </div>

    <div w60>
      <div ref="answerWrap" mt8 flex="~ gap-7 wrap" justify-center>
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
    mt8
    btn
    p="x6 y2"
    :class="isWrong ? 'animate-shakeX' : ''"
    :disabled="selected.length === 0" @click="submitAnswer"
  >
    确 定
  </button>
</template>
