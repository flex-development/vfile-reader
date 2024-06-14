/**
 * @file Unit Tests - codes
 * @module vfile-reader/tests/unit/codes
 */

import chars from '../chars'
import testSubject from '../codes'

describe('unit:codes', () => {
  it('should define codes for all keys in chars', () => {
    for (const [key, char] of Object.entries(chars)) {
      expect(testSubject).to.have.property(key, char?.codePointAt(0) ?? char)
    }
  })

  it('should have same keys as chars', () => {
    expect(testSubject).to.have.keys(Object.keys(chars))
  })
})
