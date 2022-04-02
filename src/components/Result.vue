<script setup lang="ts">
import { gameState, spendTime, resetGame } from '~/logic'
</script>

<template>
  <Teleport v-if="gameState === 2" to="body">
    <div
      fixed
      top-0
      right-0
      bottom-0
      left-0
      class="bg-black/70 color-#333"
    >
      <div
        class="bg-white fixed top--140px right-0 bottom-0 left-0 m-auto w70 h160px rounded shadow"
      >
        <div class="w200px h45px absolute top--26px left-50% ml--100px">
          <img
            absolute
            z--1
            src="/images/winner.png" alt="winner"
          >
          <div class="w100% h100% text-lg flex justify-center relative top-5px color-white">
            胜利
          </div>
        </div>
        <div class="mt40px text-4xl font-bold color-teal-600 text-center">
          {{ spendTime }}
        </div>
        <div class="text-center mt20px">
          你击败了99%的玩家
        </div>
        <div
          class="absolute bottom--70px h48px text-center lh-48px color-white rounded w-full cursor-pointer"
          style="background-image: linear-gradient(to right, #f99427, #fee774)"
          @click="resetGame"
        >
          再玩一次
        </div>

        <div class="absolute bottom--140px h48px text-center lh-48px color-white rounded border w-full cursor-pointer" @click="gameState = 0">
          关闭
        </div>
      </div>
    </div>
  </Teleport>
</template>
