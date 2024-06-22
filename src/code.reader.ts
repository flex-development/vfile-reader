/**
 * @file CodeReader
 * @module vfile-reader/CodeReader
 */

import type { Point } from '@flex-development/vfile-location'
import type { VFile, Value } from 'vfile'
import Reader from './abstract.reader'
import codes from './codes'
import type { Code, CodeCheck, Range, ReaderSlice, ReaderValues } from './types'

/**
 * Character code reader.
 *
 * @see {@linkcode Code}
 * @see {@linkcode Reader}
 *
 * @class
 * @extends {Reader<Code>}
 */
class CodeReader extends Reader<Code> {
  /**
   * Character codes in file.
   *
   * @see {@linkcode Code}
   * @see {@linkcode ReaderValues}
   *
   * @protected
   * @readonly
   * @instance
   * @member {ReaderValues<Code>} values
   */
  protected readonly values!: ReaderValues<Code>

  /**
   * Create a new character code reader.
   *
   * Pass a `start` point to make reader locations relative to a specific place.
   * Any point or offset accessed will be relative to the given point.
   *
   * @see {@linkcode Point}
   * @see {@linkcode VFile}
   * @see {@linkcode Value}
   *
   * @param {(Value | VFile | null)?} file - File to read
   * @param {(Point | null)?} [start] - Point before first code in `file`
   */
  constructor(file?: Value | VFile | null, start?: Point | null) {
    super(file, start)
    this.init([...this.source].map(char => char.codePointAt(0)!))
  }

  /**
   * Create a code check from a character code or regular expression.
   *
   * @see {@linkcode CodeCheck}
   * @see {@linkcode Code}
   *
   * @public
   * @static
   * @instance
   *
   * @param {Code | RegExp} test - Test to create check from
   * @return {CodeCheck} Code check
   */
  public static check(test: Code | RegExp): CodeCheck {
    return check

    /**
     * Check whether a character code, or sequence of codes, matches the bound
     * test.
     *
     * @param {Code | Code[]} code - Code or code sequence to check
     * @return {boolean} `true` if `code` matches bound test
     */
    function check(code: Code | Code[]): boolean {
      return test instanceof RegExp
        ? code === codes.eof
          ? false
          : Array.isArray(code)
          ? test.test(CodeReader.serialize(...code))
          : test.test(CodeReader.serialize(code))
        : code === test
    }
  }

  /**
   * Convert the specified sequence of character codes to a string.
   *
   * @see {@linkcode Code}
   *
   * @public
   * @static
   * @instance
   *
   * @param {Code[]} codes - Character code sequence
   * @return {string} String created from character code sequence
   */
  public static serialize(...codes: Code[]): string {
    return String.fromCodePoint(...(<NonNullable<Code>[]>codes))
  }

  /**
   * Get the current character code without changing the position of the reader,
   * with `null` denoting end of file.
   *
   * @see {@linkcode Code}
   *
   * @public
   * @override
   * @instance
   *
   * @return {Code} Current character code or `null`
   */
  public override get output(): Code {
    return super.output
  }

  /**
   * Get the previous character code without changing the position of the
   * reader, with `null` denoting beginning or end of file.
   *
   * @see {@linkcode Code}
   *
   * @public
   * @override
   * @instance
   *
   * @return {Code} Previous character code or `null`
   */
  public override get previous(): Code {
    return super.previous
  }

  /**
   * Create a code check from a character code or regular expression.
   *
   * @see {@linkcode CodeCheck}
   * @see {@linkcode Code}
   *
   * @public
   * @instance
   *
   * @param {Code | RegExp} test - Test to create check from
   * @return {CodeCheck} Code check
   */
  public check(test: Code | RegExp): CodeCheck {
    return CodeReader.check(test)
  }

  /**
   * Get the next `k`-th character code from the file without changing the
   * position of the reader, with `null` denoting end of file.
   *
   * @see {@linkcode Code}
   *
   * @public
   * @override
   * @instance
   *
   * @param {number?} [k=1] - Difference between index of next `k`-th character
   * code and index of current character code
   * @return {Code} Peeked character code or `null`
   */
  public override peek(k: number = 1): Code {
    return super.peek(k)
  }

  /**
   * Get the next `k`-th character code from the file, with `null` denoting end
   * of file.
   *
   * Unlike {@linkcode peek}, this method changes the position of the reader.
   *
   * @see {@linkcode Code}
   *
   * @public
   * @override
   * @instance
   *
   * @param {number?} [k=1] - Difference between index of next `k`-th character
   * code and index of current character code
   * @return {Code} Next `k`-th character code or `null`
   */
  public override read(k: number = 1): Code {
    return super.read(k)
  }

  /**
   * Convert the specified sequence of character codes to a string.
   *
   * @see {@linkcode Code}
   *
   * @public
   * @instance
   *
   * @param {Code[]} codes - Character code sequence
   * @return {string} String created from character code sequence
   */
  public serialize(...codes: Code[]): string {
    return CodeReader.serialize(...codes)
  }

  /**
   * Get the character codes spanning `range` without changing the position of
   * the reader.
   *
   * @see {@linkcode Code}
   * @see {@linkcode Range}
   * @see {@linkcode ReaderSlice}
   *
   * @public
   * @override
   * @instance
   *
   * @param {Range} range - Slice position
   * @return {ReaderSlice<Code>} Character code slice
   */
  public override slice(range: Range): ReaderSlice<Code> {
    return super.slice(range)
  }
}

export default CodeReader
