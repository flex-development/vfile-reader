/**
 * @file Type Tests - CharacterMatch
 * @module vfile-reader/types/tests/unit-d/CharacterMatch
 */

import type TestSubject from '../character-match'

describe('unit-d:types/CharacterMatch', () => {
  it('should extract RegExpExecArray', () => {
    expectTypeOf<TestSubject>().extract<RegExpExecArray>().not.toBeNever()
  })

  it('should extract null', () => {
    expectTypeOf<TestSubject>().extract<null>().not.toBeNever()
  })
})
