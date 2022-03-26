import { Tile } from '~/types'

export function checkAnswer(answer: Tile[], inputAnswer: Tile[]) {
  if (answer.length !== inputAnswer.length) {
    return false
  }
  for (let i = 0; i < answer.length; i++) {
    const tile = answer[i]
    const matchIndex = inputAnswer
      .findIndex(inputTile => tile.type === inputTile.type && tile.value === inputTile.value)
    if (matchIndex === -1) {
      return false
    }
  }
  return true
}
