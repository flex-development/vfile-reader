/**
 * @file Type Aliases - Position
 * @module vfile-reader/types/Position
 */

import type { Point } from '@flex-development/vfile-location'

/**
 * Range between two points in a source file.
 */
interface Position {
  /**
   * Place of last reader value in range.
   *
   * @see {@linkcode Point}
   */
  end: Point

  /**
   * Place of first reader value in range.
   *
   * @see {@linkcode Point}
   */
  start: Point
}

export type { Position as default }
