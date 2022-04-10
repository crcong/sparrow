<script setup lang="ts">
import {
  generateTilesByKindType,
  checkAnswer,
  promiseTimeout,
  WRONG_ANIMATION_DURATION,
} from '~/logic'
import type { Tile, TileType } from '~/types'

export interface AnswerExposed {
  renderSelectedTile: () => void
  clearSelectedTile: () => void
}

const props = withDefaults(defineProps<{
  tiles: Tile[],
  tileType: TileType,
  buttonText?: string,
}>(), {
  buttonText: '确 定',
})

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'onCorrect'): void,
  (e: 'onWrong'): void,
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
    emits('onCorrect')
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
    emits('onWrong')
  }
}

function renderSelectedTile() {
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
  renderSelectedTile()
}

function clearSelectedTile() {
  selected = []
  renderSelectedTile()
}

defineExpose<AnswerExposed>({
  renderSelectedTile,
  clearSelectedTile,
})
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
    {{ props.buttonText }}
  </button>
</template>
