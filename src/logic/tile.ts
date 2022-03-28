import { Tile } from '~/types'

export function getTileImagePath(tile: Tile) {
  if (tile.type === 'F') {
    return `/images/${tile.value}.png`
  }
  return `/images/${tile.value}${tile.type}.png`
}
