/**
 * @file Reader
 * @module vfile-reader/Reader
 */

import type { Offset } from '@flex-development/unist-util-types'
import { Location, type Point } from '@flex-development/vfile-location'
import type { VFile, Value } from 'vfile'
import type { Character, CharacterMatch } from './types'

/**
 * Character reader.
 *
 * @see {@linkcode Location}
 *
 * @class
 * @extends {Location}
 */
class Reader extends Location {
  /**
   * Current position in file.
   *
   * @protected
   * @instance
   * @member {number} position
   */
  protected position!: number

  /**
   * Source file.
   *
   * @protected
   * @readonly
   * @instance
   * @member {string} source
   */
  protected readonly source!: string

  /**
   * Create a new character reader.
   *
   * Pass a `start` point to make reader locations relative to a specific place.
   * Any point or offset accessed will be relative to the given point.
   *
   * @see {@linkcode Point}
   * @see {@linkcode VFile}
   * @see {@linkcode Value}
   *
   * @param {Value | VFile} file - File to read
   * @param {(Point | null)?} [start] - Point before first character in `file`
   */
  constructor(file: Value | VFile, start?: Point | null) {
    super(file, start)

    Object.defineProperties(this, {
      position: { enumerable: false, value: 0 },
      source: { enumerable: false, value: String(file) }
    })
  }

  /**
   * Get the current character without changing the position of the reader, with
   * `null` denoting end of file.
   *
   * @see {@linkcode Character}
   *
   * @public
   * @instance
   *
   * @return {Character} Current character or `null`
   */
  public get char(): Character {
    return this.peek(0)
  }

  /**
   * Check if the reader has reached the end of file.
   *
   * @public
   * @instance
   *
   * @return {boolean} `true` if at end of file, `false` otherwise
   */
  public get eof(): boolean {
    return this.index >= this.source.length
  }

  /**
   * Get the current position in the file.
   *
   * @see {@linkcode Offset}
   *
   * @public
   * @instance
   *
   * @return {Offset} Index of current character
   */
  public get index(): Offset {
    return this.position
  }

  /**
   * Get the previous character without changing the position of the reader,
   * with `null` denoting beginning or end of file.
   *
   * @see {@linkcode Character}
   *
   * @public
   * @instance
   *
   * @return {Character} Previous character or `null`
   */
  public get previous(): Character {
    return this.peek(-1)
  }

  /**
   * Get the current point in the file.
   *
   * @see {@linkcode Point}
   *
   * @public
   * @instance
   *
   * @return {Point} Current point in file, relative to {@linkcode start}
   */
  public now(): Point {
    return this.point(this.start.offset + this.position)
  }

  /**
   * Get the next `k`-th character from the file without changing the position
   * of the reader, with `null` denoting end of file.
   *
   * @see {@linkcode Character}
   *
   * @public
   * @instance
   *
   * @param {number?} [k=1] - Difference between index of next `k`-th character
   * and index of current character
   * @return {Character} Peeked character or `null`
   */
  public peek(k: number = 1): Character {
    return this.source[this.index + k] ?? null
  }

  /**
   * Get the next match from the file without changing the position of the
   * reader, with `null` denoting no match.
   *
   * @see {@linkcode CharacterMatch}
   * @see {@linkcode RegExp}
   *
   * @public
   * @instance
   *
   * @param {RegExp} test - Character test
   * @return {CharacterMatch} Peeked character match or `null`
   */
  public peekMatch(test: RegExp): CharacterMatch {
    test.lastIndex = this.index
    return test.exec(this.source.slice(this.index))
  }

  /**
   * Get the next `k`-th character from the file, with `null` denoting end of
   * file.
   *
   * Unlike {@linkcode peek}, this method changes the position of the reader.
   *
   * @see {@linkcode Character}
   *
   * @public
   * @instance
   *
   * @param {number?} [k=1] - Difference between index of next `k`-th character
   * and index of current character
   * @return {Character} Next `k`-th character or `null`
   */
  public read(k: number = 1): Character {
    return this.source[this.position += k] ?? null
  }
}

export default Reader
