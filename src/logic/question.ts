import { QuestionData, QuestionTileType } from '~/types'

const outOfRange = (question: QuestionData) => {
  const { q, a } = question
  const qValues = q.map((q) => Number(q)).filter((q) => !isNaN(q))
  const aValues = a.map((a) => Number(a)).filter((a) => !isNaN(a))

  return qValues.some((q) => q < 1 || q > 9) || aValues.some((a) => a < 1 || a > 9)
}

const handleTile = (q: QuestionTileType[], type: 'add' | 'sub') => {
  let handle = (n: number) => n
  switch (type) {
    case 'add':
      handle = (n) => n + 1
      break

    case 'sub':
      handle = (n) => n - 1
      break
  }
  for (let i = 0; i < q.length; i++) {
    const num = Number(q[i])
    if (!isNaN(num)) {
      q[i] = String(handle(num)) as QuestionTileType
    }
  }
}

const generateQuestion = (question: QuestionData, type: 'add' | 'sub') => {
  const result = []
  let shouldContinue = true
  let tempQuestion = JSON.parse(JSON.stringify(question)) as QuestionData
  while (shouldContinue) {
    const newQuestion = JSON.parse(JSON.stringify(tempQuestion))
    const { q, a } = newQuestion
    handleTile(q, type)
    handleTile(a, type)

    tempQuestion = { q, a }

    if (!outOfRange(newQuestion)) {
      result.push(newQuestion)
      shouldContinue = true
    } else {
      shouldContinue = false
    }
  }
  return result
}

export function generateSimilarQuestions(question: QuestionData) {
  const result: QuestionData[] = []
  generateQuestion(question, 'sub').forEach((q) => result.push(q))
  generateQuestion(question, 'add').forEach((q) => result.push(q))
  return result
}
