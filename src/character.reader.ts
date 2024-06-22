/**
 * @file CharacterReader
 * @module vfile-reader/CharacterReader
 */

import type { Point } from '@flex-development/vfile-location'
import type { VFile, Value } from 'vfile'
import Reader from './abstract.reader'
import type {
  Character,
  CharacterMatch,
  Range,
  ReaderSlice,
  ReaderValues
} from './types'

/**
 * Character reader.
 *
 * @see {@linkcode Character}
 * @see {@linkcode Reader}
 *
 * @class
 * @extends {Reader<Character>}
 */
class CharacterReader extends Reader<Character> {
  /**
   * Characters in file.
   *
   * @see {@linkcode Character}
   * @see {@linkcode ReaderValues}
   *
   * @protected
   * @readonly
   * @instance
   * @member {ReaderValues<Character>} values
   */
  protected readonly values!: ReaderValues<Character>

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
   * @param {(Value | VFile | null)?} file - File to read
   * @param {(Point | null)?} [start] - Point before first character in `file`
   */
  constructor(file?: Value | VFile | null, start?: Point | null) {
    super(file, start)
    this.init([...this.source])
  }

  /**
   * Get the current character without changing the position of the reader, with
   * `null` denoting end of file.
   *
   * @see {@linkcode Character}
   *
   * @public
   * @override
   * @instance
   *
   * @return {Character} Current character or `null`
   */
  public override get output(): Character {
    return super.output
  }

  /**
   * Get the previous character without changing the position of the reader,
   * with `null` denoting beginning or end of file.
   *
   * @see {@linkcode Character}
   *
   * @public
   * @override
   * @instance
   *
   * @return {Character} Previous character or `null`
   */
  public override get previous(): Character {
    return super.previous
  }

  /**
   * Get the next `k`-th character from the file without changing the position
   * of the reader, with `null` denoting end of file.
   *
   * @see {@linkcode Character}
   *
   * @public
   * @override
   * @instance
   *
   * @param {number?} [k=1] - Difference between index of next `k`-th character
   * and index of current character
   * @return {Character} Peeked character or `null`
   */
  public override peek(k: number = 1): Character {
    return super.peek(k)
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
   * @override
   * @instance
   *
   * @param {number?} [k=1] - Difference between index of next `k`-th character
   * and index of current character
   * @return {Character} Next `k`-th character or `null`
   */
  public override read(k: number = 1): Character {
    return super.read(k)
  }

  /**
   * Convert the specified sequence of characters to a string.
   *
   * @see {@linkcode Character}
   *
   * @public
   * @instance
   *
   * @param {Character[]} chars - Character sequence
   * @return {string} String created from character sequence
   */
  public serialize(...chars: Character[]): string {
    return chars.join('')
  }

  /**
   * Get the characters spanning `range` without changing the position of the
   * reader.
   *
   * @see {@linkcode Character}
   * @see {@linkcode Range}
   * @see {@linkcode ReaderSlice}
   *
   * @public
   * @override
   * @instance
   *
   * @param {Range} range - Slice position
   * @return {ReaderSlice<Character>} Character slice
   */
  public override slice(range: Range): ReaderSlice<Character> {
    return super.slice(range)
  }
}

export default CharacterReader
