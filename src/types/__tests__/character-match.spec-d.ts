/**
 * @file Type Tests - CharacterMatch
 * @module vfile-reader/types/tests/unit-d/CharacterMatch
 */

import type { Nullable } from '@flex-development/tutils'
import type TestSubject from '../character-match'

describe('unit-d:types/CharacterMatch', () => {
  it('should equal RegExpExecArray | null', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<Nullable<RegExpExecArray>>()
  })
})
