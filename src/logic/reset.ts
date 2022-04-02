import {
  startGame,
  counter,
  selected,
  stage,
  question,
  resumeCounter,
} from '~/logic'
import { gameState } from './state'

export function resetGame() {
  selected.value = []
  stage.value = 1
  question.value = startGame()
  counter.value = 0
  gameState.value = 0
  resumeCounter()
}
