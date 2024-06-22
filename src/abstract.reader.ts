/**
 * @file Reader
 * @module vfile-reader/Reader
 */

import type { Offset } from '@flex-development/unist-util-types'
import { Location, type Point } from '@flex-development/vfile-location'
import type { VFile, Value } from 'vfile'
import type { ReaderIterator } from './interfaces'
import type {
  Range,
  ReaderIteratorResult,
  ReaderSlice,
  ReaderValue,
  ReaderValues
} from './types'

/**
 * Abstract input reader.
 *
 * @see {@linkcode Location}
 * @see {@linkcode ReaderIterator}
 * @see {@linkcode ReaderValue}
 *
 * @template {ReaderValue} [T=ReaderValue] - Reader output value
 *
 * @class
 * @abstract
 * @extends {Location}
 * @implements {ReaderIterator<T>}
 */
abstract class Reader<
  T extends ReaderValue = ReaderValue
> extends Location implements ReaderIterator<T> {
  /**
   * Current position in file.
   *
   * @see {@linkcode Offset}
   *
   * @private
   * @instance
   * @member {Offset | null}
   */
  #position: Offset | null

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
   * Reader output values.
   *
   * @see {@linkcode ReaderValues}
   *
   * @protected
   * @abstract
   * @readonly
   * @instance
   * @member {ReaderValues<T>} values
   */
  protected abstract readonly values: ReaderValues<T>

  /**
   * Create a new input reader.
   *
   * Pass a `start` point to make reader locations relative to a specific place.
   * Any point or offset accessed will be relative to the given point.
   *
   * @see {@linkcode Point}
   * @see {@linkcode VFile}
   * @see {@linkcode Value}
   *
   * @param {(Value | VFile | null)?} file - File to read
   * @param {(Point | null)?} [start] - Point before first reader value
   */
  constructor(file?: Value | VFile | null, start?: Point | null) {
    super(file ??= '', start)

    this.#position = null
    this.source = String(file)

    Object.defineProperty(this, 'source', { enumerable: false })
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
    return this.index >= this.values.length - 1
  }

  /**
   * Get the index of the current reader value.
   *
   * @see {@linkcode Offset}
   *
   * @public
   * @instance
   *
   * @return {Offset} Index of current reader value
   */
  public get index(): Offset {
    return this.#position ?? 0
  }

  /**
   * Get the current reader value without changing the position of the reader,
   * with `null` denoting end of file.
   *
   * @public
   * @instance
   *
   * @return {T} Current reader value or `null`
   */
  public get output(): T {
    return this.peek(0)
  }

  /**
   * Get the previous reader value without changing the position of the reader,
   * with `null` denoting beginning or end of file.
   *
   * @public
   * @instance
   *
   * @return {T} Previous reader value or `null`
   */
  public get previous(): T {
    return this.peek(-1)
  }

  /**
   * Get a reader value iterator.
   *
   * @see {@linkcode ReaderIteratorResult}
   *
   * @public
   * @instance
   *
   * @return {ReaderIterator<T>} Reader iterator
   */
  public [Symbol.iterator](): ReaderIterator<T> {
    return this
  }

  /**
   * Check if the file contains the given search `value`, relative to the
   * current reader position.
   *
   * @public
   * @instance
   *
   * @param {string} value - Value to search for in file
   * @return {boolean} `true` if file contains search `value`
   */
  public includes(value: string): boolean {
    return this.source.includes(value, this.index)
  }

  /**
   * Initialize the reader.
   *
   * @protected
   * @instance
   *
   * @param {NonNullable<T>[]} values - Reader output values
   * @return {this} `this` reader
   */
  protected init(values: NonNullable<T>[]): this {
    return Object.defineProperties(this, {
      values: { enumerable: false, value: Object.freeze([...values, null]) }
    })
  }

  /**
   * Get the next reader result.
   *
   * Unlike {@linkcode peek}, this method changes the position of the reader.
   *
   * @public
   * @instance
   *
   * @return {IteratorResult<T>} Next reader result
   */
  public next(): ReaderIteratorResult<T> {
    return { done: this.eof, value: this.read() }
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
    return this.point(this.start.offset + this.index)
  }

  /**
   * Get the next `k`-th reader value from the file without changing the
   * position of the reader, with `null` denoting end of file.
   *
   * @public
   * @instance
   *
   * @param {number?} [k=1] - Difference between index of next `k`-th reader
   * value and index of current value
   * @return {T} Peeked reader value or `null`
   */
  public peek(k: number = 1): T {
    return <T>(this.values[this.index + k] ?? null)
  }

  /**
   * Get the next `k`-th reader value from the file, with `null` denoting end of
   * file.
   *
   * Unlike {@linkcode peek}, this method changes the position of the reader.
   *
   * @public
   * @instance
   *
   * @param {number?} [k=1] - Difference between index of next `k`-th reader
   * value and index of current value
   * @return {T} Next `k`-th reader value or `null`
   */
  public read(k: number = 1): T {
    if (!k) return this.peek(0)
    return this.#position ??= -1, <T>(this.values[this.#position += k] ?? null)
  }

  /**
   * Reset the position of the reader.
   *
   * @public
   * @instance
   *
   * @return {this} `this` repositioned reader
   */
  public reset(): this {
    return this.#position = null, this
  }

  /**
   * Convert the specified sequence of reader values to a string.
   *
   * @see {@linkcode ReaderSlice}
   *
   * @public
   * @abstract
   * @instance
   *
   * @param {ReaderSlice<T> | T[]} values - Reader value sequence
   * @return {string} String created from reader value sequence
   */
  public abstract serialize(...values: ReaderSlice<T> | T[]): string

  /**
   * Get the values spanning `range` without changing the position of the
   * reader.
   *
   * @see {@linkcode Range}
   * @see {@linkcode ReaderSlice}
   *
   * @public
   * @instance
   *
   * @param {Range} range - Slice position
   * @return {ReaderSlice<T>} Reader value slice
   */
  public slice(range: Range): ReaderSlice<T> {
    if (!Array.isArray(range)) range = [range.start, range.end]

    let [h, x] = range
    if (typeof h === 'object') h = h.offset
    if (typeof x === 'object' && x) x = x.offset

    return <never>this.values.slice(h, typeof x === 'number' ? x++ : undefined)
  }

  /**
   * Get the text spanning `range` without changing the position of the reader.
   *
   * @see {@linkcode Range}
   *
   * @public
   * @instance
   *
   * @param {Range} range - Slice position
   * @return {string} Serialized slice
   */
  public sliceSerialize(range: Range): string {
    return this.serialize(...this.slice(range))
  }
}

export default Reader
