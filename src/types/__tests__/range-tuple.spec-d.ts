/**
 * @file Type Tests - RangeTuple
 * @module vfile-reader/types/tests/unit-d/RangeTuple
 */

import type { Nilable } from '@flex-development/tutils'
import type { Offset } from '@flex-development/unist-util-types'
import type { Point } from '@flex-development/vfile-location'
import type TestSubject from '../range-tuple'

describe('unit-d:types/RangeTuple', () => {
  it('should match [0: Offset | Point]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('0')
      .toEqualTypeOf<Offset | Point>()
  })

  it('should match [1?: Offset | Point | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('1')
      .toEqualTypeOf<Nilable<Offset | Point>>()
  })

  it('should match [length: 1 | 2]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('length').toEqualTypeOf<1 | 2>()
  })
})
