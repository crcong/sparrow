import { Question, QuestionFromJson, QuestionTileType, Tile, TileType } from '~/types'
import { HONOR_VALUES, TILE_TYPES } from './constants'
import { maxStage, questionData } from './state'
import { getRandom } from './utils'

export function generateTilesByKindType(tileType: TileType) {
  return Array.from({ length: 9 }, (_, i) => ({ type: tileType, value: i + 1 } as Tile))
}

export function getQuestion(stage = 1) {
  if (stage > maxStage) {
    throw new Error('stage is too large')
  }
  const questions = questionData
  const index = getRandom(0, questions[`stage${stage}`].length - 1)
  return transformToQuestion(questions[`stage${stage}`][index])
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
  let _value
  let _type
  if (HONOR_VALUES.includes(t)) {
    _value = t
    _type = 'F'
  } else {
    const [value, type] = t.split('')
    _type = type
    _value = parseInt(value)
  }
  return {
    value: _value,
    type: _type || tileType,
  } as unknown as Tile
}
