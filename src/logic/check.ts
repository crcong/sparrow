import { Tile } from '~/types'

export function checkAnswer(answer: Tile[], inputAnswer: Tile[]) {
  const correct = answer.every((a, i) => {
    return a.type === inputAnswer[i].type && a.value === inputAnswer[i].value
  })
  return {
    correct,
    answer,
    inputAnswer,
  }
}
