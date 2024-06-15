/**
 * @file Type Tests - Range
 * @module vfile-reader/types/tests/unit-d/Range
 */

import type { Position } from '#src/interfaces'
import type TestSubject from '../range'
import type RangeTuple from '../range-tuple'

describe('unit-d:types/Range', () => {
  it('should extract Position', () => {
    expectTypeOf<TestSubject>().extract<Position>().not.toBeNever()
  })

  it('should extract RangeTuple', () => {
    expectTypeOf<TestSubject>().extract<RangeTuple>().not.toBeNever()
  })
})
