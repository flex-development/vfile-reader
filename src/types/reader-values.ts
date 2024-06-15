/**
 * @file Type Aliases - ReaderValues
 * @module vfile-reader/types/ReaderValues
 */

import type ReaderValue from './reader-value'

/**
 * Reader output values.
 *
 * @see {@linkcode ReaderValue}
 *
 * @template {ReaderValue} [T=ReaderValue] - Reader output value
 */
type ReaderValues<T extends ReaderValue = ReaderValue> = readonly [
  ...values: NonNullable<T>[],
  eof: null
]

export type { ReaderValues as default }
