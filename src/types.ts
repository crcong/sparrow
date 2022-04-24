export type TileType = 'T' | 'B' | 'W' | 'F'

type Suit = {
  type: 'T' | 'B' | 'W'
  value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
}

type Honor = {
  type: 'F'
  value: 'DF' | 'NF' | 'XF' | 'DF' | 'HZ' | 'FC' | 'BB'
}

type _Tile = Suit | Honor

export type Tile = _Tile & {
  selected?: boolean
}

export interface Question {
  q: Tile[]
  a: Tile[]
  kindType: 'T' | 'B' | 'W'
}

export type QuestionTileType =
  '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' |
  '1T' | '2T' | '3T' | '4T' | '5T' | '6T' | '7T' | '8T' | '9T' |
  '1B' | '2B' | '3B' | '4B' | '5B' | '6B' | '7B' | '8B' | '9B' |
  '1W' | '2W' | '3W' | '4W' | '5W' | '6W' | '7W' | '8W' | '9W' |
  'DF' | 'NF' | 'XF' | 'DF' | 'HZ' | 'FC' | 'BB'

export interface QuestionData {
  q: QuestionTileType[]
  a: QuestionTileType[]
}

export type QuestionsData = Record<string, QuestionData[]>

/**
 * 0: 未开始
 * 1: 进行中
 * 2: 结束
 */
export type GameState = 0 | 1 | 2
