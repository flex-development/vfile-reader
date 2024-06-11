/**
 * @file Type Tests - ReaderIteratorResult
 * @module vfile-reader/types/tests/unit-d/ReaderIteratorResult
 */

import type Character from '../character'
import type TestSubject from '../reader-iterator-result'

describe('unit-d:types/ReaderIteratorResult', () => {
  type T = Character

  it('should extract IteratorReturnResult<T>', () => {
    expectTypeOf<TestSubject>()
      .extract<IteratorReturnResult<T>>()
      .not.toBeNever()
  })

  it('should extract IteratorYieldResult<T>', () => {
    expectTypeOf<TestSubject>()
      .extract<IteratorYieldResult<T>>()
      .not.toBeNever()
  })
})
