/**
 * @file Type Tests - CodeReader
 * @module vfile-reader/tests/unit-d/CodeReader
 */

import type { Code } from '#src/types'
import type Reader from '../abstract.reader'
import type TestSubject from '../code.reader'

describe('unit-d:CodeReader', () => {
  it('should extend Reader<Code>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Reader<Code>>()
  })
})
