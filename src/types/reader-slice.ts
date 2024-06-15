/**
 * @file Type Aliases - ReaderSlice
 * @module vfile-reader/types/ReaderSlice
 */

import type ReaderValue from './reader-value'
import type ReaderValues from './reader-values'

/**
 * Array representing a slice of reader output values.
 *
 * @see {@linkcode ReaderValue}
 *
 * @template {ReaderValue} [T=ReaderValue] - Reader output value
 */
type ReaderSlice<T extends ReaderValue = ReaderValue> =
  | [...values: NonNullable<T>[], value: NonNullable<T>]
  | [...values: ReaderValues<T>]
  | []

export type { ReaderSlice as default }
