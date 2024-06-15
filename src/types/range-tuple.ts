/**
 * @file Type Aliases - RangeTuple
 * @module vfile-reader/types/RangeTuple
 */

import type { Offset } from '@flex-development/unist-util-types'
import type { Point } from '@flex-development/vfile-location'

/**
 * List, where the first value is the location of the first reader value in a
 * slice, and the last is the location of the last reader value, with `null` or
 * `undefined` denoting all values after the first (inclusive) are included in
 * the slice.
 *
 * @see {@linkcode Offset}
 * @see {@linkcode Point}
 */
type RangeTuple = [
  start: Offset | Point,
  end?: Offset | Point | null | undefined
]

export type { RangeTuple as default }
