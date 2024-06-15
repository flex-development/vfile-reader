/**
 * @file Type Tests - ReaderSlice
 * @module vfile-reader/types/tests/unit-d/ReaderSlice
 */

import type Code from '../code'
import type TestSubject from '../reader-slice'
import type ReaderValues from '../reader-values'

describe('unit-d:types/ReaderSlice', () => {
  type T = Code

  it('should extract [...NonNullable<T>[], NonNullable<T>]', () => {
    // Arrange
    type X = [...NonNullable<T>[], NonNullable<T>]

    // Expect
    expectTypeOf<TestSubject<T>>().extract<X>().not.toBeNever()
  })

  it('should extract [...ReaderValues<T>]', () => {
    // Arrange
    type X = [...ReaderValues<T>]

    // Expect
    expectTypeOf<TestSubject<T>>().extract<X>().not.toBeNever()
  })

  it('should extract []', () => {
    expectTypeOf<TestSubject<T>>().extract<[]>().not.toBeNever()
  })
})
