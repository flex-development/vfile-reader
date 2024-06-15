/**
 * @file Type Tests - ReaderValues
 * @module vfile-reader/types/tests/unit-d/ReaderValues
 */

import type Character from '../character'
import type TestSubject from '../reader-values'

describe('unit-d:types/ReaderValues', () => {
  type T = Character

  it('should equal readonly [...NonNullable<T>[], null]', () => {
    // Arrange
    type Expect = readonly [...NonNullable<T>[], null]

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
  })
})
