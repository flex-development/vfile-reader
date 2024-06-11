/**
 * @file Type Tests - Character
 * @module vfile-reader/types/tests/unit-d/Character
 */

import type TestSubject from '../character'

describe('unit-d:types/Character', () => {
  it('should extract string', () => {
    expectTypeOf<TestSubject>().extract<string>().not.toBeNever()
  })

  it('should extract null', () => {
    expectTypeOf<TestSubject>().extract<null>().not.toBeNever()
  })
})
