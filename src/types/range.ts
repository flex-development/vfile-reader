/**
 * @file Type Aliases - Range
 * @module vfile-reader/types/Range
 */

import type { Position } from '#src/interfaces'
import type RangeTuple from './range-tuple'

/**
 * Union of range types.
 *
 * @see {@linkcode Position}
 * @see {@linkcode RangeTuple}
 */
type Range = Position | RangeTuple

export type { Range as default }
