/**
 * @file Type Tests - Reader
 * @module vfile-reader/tests/unit-d/Reader
 */

import type { Location } from '@flex-development/vfile-location'
import type TestSubject from '../reader'

describe('unit-d:Reader', () => {
  it('should extend Location', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Location>()
  })
})
