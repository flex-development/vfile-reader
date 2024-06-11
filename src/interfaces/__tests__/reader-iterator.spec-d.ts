/**
 * @file Type Tests - ReaderIterator
 * @module vfile-reader/interfaces/tests/unit-d/ReaderIterator
 */

import type { ReaderIteratorResult } from '#src/types'
import type TestSubject from '../reader-iterator'

describe('unit-d:interfaces/ReaderIterator', () => {
  describe('[Symbol.iterator]', () => {
    it('should return ReaderIterator<T>', () => {
      expectTypeOf<TestSubject[typeof Symbol.iterator]>()
        .returns
        .toEqualTypeOf<TestSubject>()
    })
  })

  describe('next', () => {
    it('should return ReaderIteratorResult<T>', () => {
      expectTypeOf<TestSubject>()
        .toHaveProperty('next')
        .returns
        .toEqualTypeOf<ReaderIteratorResult>()
    })
  })
})
