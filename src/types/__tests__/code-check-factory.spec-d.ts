/**
 * @file Type Tests - CodeCheckFactory
 * @module vfile-reader/types/tests/unit-d/CodeCheckFactory
 */

import type Code from '../code'
import type CodeCheck from '../code-check'
import type TestSubject from '../code-check-factory'

describe('unit-d:types/CodeCheckFactory', () => {
  describe('parameters', () => {
    it('should be callable with [Code | RegExp]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Code | RegExp]>()
    })
  })

  describe('returns', () => {
    it('should return CodeCheck', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<CodeCheck>()
    })
  })
})
