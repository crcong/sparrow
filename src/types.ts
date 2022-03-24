export type TileType =
  '1T' | '2T' | '3T' | '4T' | '5T' | '6T' | '7T' | '8T' | '9T' |
  '1B' | '2B' | '3B' | '4B' | '5B' | '6B' | '7B' | '8B' | '9B' |
  '1W' | '2W' | '3W' | '4W' | '5W' | '6W' | '7W' | '8W' | '9W' |
  'DF' | 'NF' | 'XF' | 'DF' | 'HZ' | 'FC' | 'BB'

export type TileKindType = 'T' | 'B' | 'W'

export interface Tile {
  type: TileType
  selected?: boolean
}

export interface Question {
  q: Tile[]
  a: Tile[]
  kindType: TileKindType
}

export type QuestionTileType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | TileType

export interface QuestionFromJson {
  q: QuestionTileType[]
  a: QuestionTileType[]
}

export interface QuestionsFromJson {
  easy: QuestionFromJson[]
}
