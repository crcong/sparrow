import _questions from '~/data/questions.json'
import { Question, QuestionsFromJson, QuestionFromJson, QuestionTileType, TileType, Tile } from '~/types'
import { TILE_TYPES } from './constants'
import { getRandom } from './utils'

const questions = _questions as QuestionsFromJson

export function generateTilesByKindType(tileType: TileType) {
  return Array.from({ length: 9 }, (_, i) => ({ type: tileType, value: i + 1 } as Tile))
}

export function startGame() {
  const index = getRandom(0, questions.easy.length - 1)
  return transformToQuestion(questions.easy[index])
}

function transformToQuestion(questionFromJson: QuestionFromJson) {
  const kindType = getRandomTileType()
  const a = questionFromJson.a.map((a) => transformToTile(a, kindType))
  const q = questionFromJson.q.map((q) => transformToTile(q, kindType))
  return { a, q, kindType } as Question
}

function getRandomTileType() {
  const index = getRandom(0, TILE_TYPES.length - 1)
  return TILE_TYPES[index] as TileType
}

function transformToTile(t: QuestionTileType, tileType: TileType) {
  const [value, type] = t.split('')
  let _type = type
  if (!/^\d/.test(value)) {
    _type = 'F'
  }
  return {
    value: /^\d/.test(value) ? parseInt(value, 10) : value,
    type: _type || tileType,
  } as unknown as Tile
}
