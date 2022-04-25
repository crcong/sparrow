import { describe, expect, it } from 'vitest'
import { generateSimilarQuestions } from '~/logic/question'
import { QuestionData } from '~/types'

describe('question', () => {
  it('generateSimilarQuestions', () => {
    const question: QuestionData = {
      q: ['DF', 'DF', 'DF', 'NF', 'NF', '2', '3'],
      a: ['1', '4'],
    }
    expect(generateSimilarQuestions(question)).toMatchInlineSnapshot(`
      [
        {
          "a": [
            "2",
            "5",
          ],
          "q": [
            "DF",
            "DF",
            "DF",
            "NF",
            "NF",
            "3",
            "4",
          ],
        },
        {
          "a": [
            "3",
            "6",
          ],
          "q": [
            "DF",
            "DF",
            "DF",
            "NF",
            "NF",
            "4",
            "5",
          ],
        },
        {
          "a": [
            "4",
            "7",
          ],
          "q": [
            "DF",
            "DF",
            "DF",
            "NF",
            "NF",
            "5",
            "6",
          ],
        },
        {
          "a": [
            "5",
            "8",
          ],
          "q": [
            "DF",
            "DF",
            "DF",
            "NF",
            "NF",
            "6",
            "7",
          ],
        },
        {
          "a": [
            "6",
            "9",
          ],
          "q": [
            "DF",
            "DF",
            "DF",
            "NF",
            "NF",
            "7",
            "8",
          ],
        },
      ]
    `)
  })
})
