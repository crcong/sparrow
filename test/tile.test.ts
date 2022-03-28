import { describe, expect, it } from 'vitest'
import { getTileImagePath } from '~/logic/tile'
import { Tile } from '~/types'

describe('getTileImagePath', () => {
  it('should works', () => {
    const honorTile: Tile = {
      value: 'BB',
      type: 'F',
    }
    expect(getTileImagePath(honorTile)).equals('/images/BB.png')

    const suitTile: Tile = {
      value: 1,
      type: 'T',
    }
    expect(getTileImagePath(suitTile)).equals('/images/1T.png')
  })
})
