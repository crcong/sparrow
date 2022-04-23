import {
  counter,
  getQuestion,
  question,
  resumeCounter,
  stage,
} from '~/logic'
import { gameState } from './state'

export function resetGame() {
  stage.value = 1
  question.value = getQuestion()
  counter.value = 0
  gameState.value = 0
  resumeCounter()
}
