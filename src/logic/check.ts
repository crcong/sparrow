import { Tile } from '~/types'

export function checkAnswer(answer: Tile[], inputAnswer: Tile[]) {
  const correct = answer.every((a, i) => a.type === inputAnswer[i].type)
  return {
    correct,
    answer,
    inputAnswer,
  }
}
