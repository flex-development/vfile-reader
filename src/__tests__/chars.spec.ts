/**
 * @file Unit Tests - chars
 * @module vfile-reader/tests/unit/chars
 */

import testSubject from '../chars'
import codes from '../codes'

describe('unit:chars', () => {
  it('should have same keys as codes', () => {
    expect(testSubject).to.have.keys(Object.keys(codes))
  })
})
