/**
 * @file Type Aliases - ReaderIteratorResult
 * @module vfile-reader/types/ReaderIteratorResult
 */

import type ReaderValue from './reader-value'

/**
 * Union of input reader iterator results.
 *
 * @see {@linkcode IteratorReturnResult}
 * @see {@linkcode IteratorYieldResult}
 * @see {@linkcode ReaderValue}
 *
 * @template {ReaderValue} [T=ReaderValue] - Reader output value
 */
type ReaderIteratorResult<
  T extends ReaderValue = ReaderValue
> = IteratorReturnResult<T> | IteratorYieldResult<T>

export type { ReaderIteratorResult as default }
