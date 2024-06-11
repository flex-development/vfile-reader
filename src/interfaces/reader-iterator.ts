/**
 * @file Type Aliases - ReaderIterator
 * @module vfile-reader/types/ReaderIterator
 */

import type { ReaderIteratorResult, ReaderValue } from '#src/types'

/**
 * Input reader iterator API.
 *
 * @see {@linkcode ReaderValue}
 *
 * @template {ReaderValue} [T=ReaderValue] - Reader output value
 */
interface ReaderIterator<T extends ReaderValue = ReaderValue> {
  /**
   * Iterable protocol.
   *
   * @see {@linkcode ReaderIterator}
   *
   * @return {ReaderIterator<T>} Reader iterator
   */
  [Symbol.iterator](): ReaderIterator<T>

  /**
   * Get the next reader result.
   *
   * @see {@linkcode ReaderIteratorResult}
   *
   * @return {ReaderIteratorResult<T>} Next reader result
   */
  next(): ReaderIteratorResult<T>
}

export type { ReaderIterator as default }
