/**
 * @file E2E Tests - api
 * @module vfile-reader/tests/e2e/api
 */

import * as testSubject from '../index'

describe('e2e:vfile-reader', () => {
  it('should expose public api', () => {
    expect(testSubject).to.have.keys([
      'CharacterReader',
      'CodeReader',
      'Reader',
      'chars',
      'codes'
    ])
  })
})
