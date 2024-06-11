/**
 * @file Type Tests - CharacterReader
 * @module vfile-reader/tests/unit-d/CharacterReader
 */

import type Reader from '../abstract.reader'
import type TestSubject from '../character.reader'

describe('unit-d:CharacterReader', () => {
  it('should extend Reader', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Reader>()
  })
})
