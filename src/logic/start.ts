import _questions from '~/data/questions.json'
import { Question, QuestionsFromJson, QuestionFromJson, QuestionTileType, TileType, TileKindType, Tile } from '~/types'
import { TILE_KIND_TYPES } from './constants'
import { getRandom } from './utils'

const questions = _questions as QuestionsFromJson

export function generateTilesByKindType(typeKind: TileKindType) {
  return Array.from({ length: 9 }, (_, i) => ({ type: i + 1 + typeKind } as Tile))
}

export function startGame() {
  const index = getRandom(0, questions.easy.length - 1)
  return transformToQuestion(questions.easy[index])
}

function transformToQuestion(questionFromJson: QuestionFromJson) {
  const kindType = getRandomTileKindType()
  const a = questionFromJson.a.map((a) => transformToTile(a, kindType))
  const q = questionFromJson.q.map((q) => transformToTile(q, kindType))
  return { a, q, kindType } as Question
}

function getRandomTileKindType() {
  const index = getRandom(0, TILE_KIND_TYPES.length - 1)
  return TILE_KIND_TYPES[index] as TileKindType
}

function transformToTile(t: QuestionTileType, typeKind: TileKindType) {
  return {
    type: (t.length === 1 ? t + typeKind : t) as TileType,
  }
}
