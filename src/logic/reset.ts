import {
  startGame,
  counter,
  selected,
  stage,
  question,
  resumeCounter,
} from '~/logic'

export function resetGame() {
  selected.value = []
  stage.value = 1
  question.value = startGame()
  counter.value = 0
  resumeCounter()
}
