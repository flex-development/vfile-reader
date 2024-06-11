/**
 * @file Type Tests - ReaderValue
 * @module vfile-reader/types/tests/unit-d/ReaderValue
 */

import type Character from '../character'
import type Code from '../code'
import type TestSubject from '../reader-value'

describe('unit-d:types/ReaderValue', () => {
  it('should extract Character', () => {
    expectTypeOf<TestSubject>().extract<Character>().not.toBeNever()
  })

  it('should extract Code', () => {
    expectTypeOf<TestSubject>().extract<Code>().not.toBeNever()
  })
})
