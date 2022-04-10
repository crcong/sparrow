<script setup lang="ts">
import {
  showRule,
} from '~/logic'
import type { Question } from '~/types'

const question: Question = {
  q: [
    { type: 'F', value: 'DF' },
    { type: 'F', value: 'DF' },
    { type: 'F', value: 'BB' },
    { type: 'F', value: 'BB' },
    { type: 'F', value: 'BB' },
    { type: 'B', value: 4 },
    { type: 'B', value: 6 },
  ],
  a: [
    { type: 'B', value: 5 },
  ],
  kindType: 'T',
}

const openGame = '是不是很简单，再次点击开始游戏！！'
let buttonText = $ref('确 定')

function onCorrect() {
  if (buttonText === openGame) {
    showRule.value = false
  }
  buttonText = openGame
}
</script>

<template>
  <div h-100vh dark:bg-hex-121212 overflow-y-auto class="bg-hex-fffaf0">
    <div absolute top-4 right-4 flex="~ gap-3" @click="showRule = !showRule">
      <button icon-btn>
        <div i-carbon-close />
      </button>
    </div>
    <div flex="~ col" justify-center items-center>
      <div text-2xl mt4>
        Sparrow
      </div>
      <div w-10 border="b #ccc" mt4 />

      <div>如何快速看清麻将胡牌的听口？</div>

      <div>在知乎上有这么一个回答：背下所有七张牌构成的多面听</div>

      <div>此游戏有助于练习看清麻将的多面听</div>

      <div w-10 border="b #ccc" mt4 />

      <div>游戏规则</div>

      <div>你会看到一副已经听牌的麻将</div>
      <div>你需要选择可以让这副牌胡牌的麻将</div>

      <div>比如：</div>

      <Question :tiles="question.q" />

      <div>上面题目看出是胡5饼，我们可以从下面9张牌中点击5饼：</div>

      <Answer
        :tiles="question.a"
        tile-type="B"
        :button-text="buttonText"
        @on-correct="onCorrect"
      />

      <div h10 />
    </div>
  </div>
</template>
