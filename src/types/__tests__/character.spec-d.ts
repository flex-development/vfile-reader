/**
 * @file Type Tests - Character
 * @module vfile-reader/types/tests/unit-d/Character
 */

import type { Nullable } from '@flex-development/tutils'
import type TestSubject from '../character'

describe('unit-d:types/Character', () => {
  it('should equal string | null', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<Nullable<string>>()
  })
})
