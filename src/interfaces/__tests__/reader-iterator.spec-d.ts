/**
 * @file Type Tests - ReaderIterator
 * @module vfile-reader/interfaces/tests/unit-d/ReaderIterator
 */

import type { Code, ReaderIteratorResult } from '#src/types'
import type TestSubject from '../reader-iterator'

describe('unit-d:interfaces/ReaderIterator', () => {
  type T = Code

  describe('[Symbol.iterator]', () => {
    it('should return ReaderIterator<T>', () => {
      expectTypeOf<TestSubject<T>[typeof Symbol.iterator]>()
        .returns
        .toEqualTypeOf<TestSubject<T>>()
    })
  })

  describe('next', () => {
    it('should return ReaderIteratorResult<T>', () => {
      expectTypeOf<TestSubject<T>>()
        .toHaveProperty('next')
        .returns
        .toEqualTypeOf<ReaderIteratorResult<T>>()
    })
  })
})
