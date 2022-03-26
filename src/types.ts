export type TileType = 'T' | 'B' | 'W' | 'F'

export type TileValue =
  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
  'DF' | 'NF' | 'XF' | 'DF' | 'HZ' | 'FC' | 'BB'

export interface Tile {
  value: TileValue
  type: TileType
  selected?: boolean
}

export interface Question {
  q: Tile[]
  a: Tile[]
  kindType: TileType
}

export type QuestionTileType =
  '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' |
  '1T' | '2T' | '3T' | '4T' | '5T' | '6T' | '7T' | '8T' | '9T' |
  '1B' | '2B' | '3B' | '4B' | '5B' | '6B' | '7B' | '8B' | '9B' |
  '1W' | '2W' | '3W' | '4W' | '5W' | '6W' | '7W' | '8W' | '9W' |
  'DF' | 'NF' | 'XF' | 'DF' | 'HZ' | 'FC' | 'BB'

export interface QuestionFromJson {
  q: QuestionTileType[]
  a: QuestionTileType[]
}

export type QuestionsFromJson = Record<string, QuestionFromJson[]>
