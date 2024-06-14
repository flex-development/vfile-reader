/**
 * @file CodeReader
 * @module vfile-reader/CodeReader
 */

import { type Point } from '@flex-development/vfile-location'
import type { VFile, Value } from 'vfile'
import Reader from './abstract.reader'
import type { Code } from './types'

/**
 * Code point reader.
 *
 * @see {@linkcode Code}
 * @see {@linkcode Reader}
 *
 * @class
 * @extends {Reader<Code>}
 */
class CodeReader extends Reader<Code> {
  /**
   * Code points in file.
   *
   * @see {@linkcode Code}
   *
   * @protected
   * @readonly
   * @instance
   * @member {ReadonlyArray<NonNullable<Code>>} values
   */
  protected readonly values!: readonly NonNullable<Code>[]

  /**
   * Create a new code point reader.
   *
   * Pass a `start` point to make reader locations relative to a specific place.
   * Any point or offset accessed will be relative to the given point.
   *
   * @see {@linkcode Point}
   * @see {@linkcode VFile}
   * @see {@linkcode Value}
   *
   * @param {Value | VFile} file - File to read
   * @param {(Point | null)?} [start] - Point before first code point in `file`
   */
  constructor(file: Value | VFile, start?: Point | null) {
    super(file, start)

    Object.defineProperties(this, {
      values: {
        enumerable: false,
        value: [...this.source].map(char => char.codePointAt(0)!)
      }
    })
  }

  /**
   * Get the current code point without changing the position of the reader,
   * with `null` denoting end of file.
   *
   * @see {@linkcode Code}
   *
   * @public
   * @override
   * @instance
   *
   * @return {Code} Current code point or `null`
   */
  public override get output(): Code {
    return super.output
  }

  /**
   * Get the previous code point without changing the position of the reader,
   * with `null` denoting beginning or end of file.
   *
   * @see {@linkcode Code}
   *
   * @public
   * @override
   * @instance
   *
   * @return {Code} Previous code point or `null`
   */
  public override get previous(): Code {
    return super.previous
  }

  /**
   * Get the next `k`-th code point from the file without changing the position
   * of the reader, with `null` denoting end of file.
   *
   * @see {@linkcode Code}
   *
   * @public
   * @override
   * @instance
   *
   * @param {number?} [k=1] - Difference between index of next `k`-th code point
   * and index of current code point
   * @return {Code} Peeked code point or `null`
   */
  public override peek(k: number = 1): Code {
    return super.peek(k)
  }

  /**
   * Get the next `k`-th code point from the file, with `null` denoting end of
   * file.
   *
   * Unlike {@linkcode peek}, this method changes the position of the reader.
   *
   * @see {@linkcode Code}
   *
   * @public
   * @override
   * @instance
   *
   * @param {number?} [k=1] - Difference between index of next `k`-th code point
   * and index of current code point
   * @return {Code} Next `k`-th code point or `null`
   */
  public override read(k: number = 1): Code {
    return super.read(k)
  }

  /**
   * Convert the specified sequence of code points to a string.
   *
   * @see {@linkcode Code}
   *
   * @public
   * @instance
   *
   * @param {Code[]} codes - Code points sequence
   * @return {string} String created from code point sequence
   */
  public serialize(...codes: Code[]): string {
    return String.fromCodePoint(...(<NonNullable<Code>[]>codes))
  }

  /**
   * Get a slice of the most recent code points, with the last value being the
   * current code point, without changing the position of the reader.
   *
   * @see {@linkcode Code}
   *
   * @public
   * @override
   * @instance
   *
   * @param {number} m - Maximum number of code points to include in slice
   * @return {NonNullable<Code>[]} Code points slice
   */
  public override slice(m: number): NonNullable<Code>[] {
    return super.slice(m)
  }
}

export default CodeReader
