/**
 * @file Unit Tests - CharacterReader
 * @module vfile-reader/tests/unit/CharacterReader
 */

import type { Offset } from '@flex-development/unist-util-types'
import { read } from 'to-vfile'
import TestSubject from '../character.reader'

describe('unit:CharacterReader', () => {
  let index: Offset
  let subject: TestSubject

  beforeAll(async () => {
    subject = new TestSubject(await read('__fixtures__/alphabet.txt'))
    index = subject.index
  })

  describe('#output', () => {
    it('should return current character without changing position', () => {
      expect(subject.output).to.eq(subject.peek(0))
      expect(subject.index).to.eq(index)
    })
  })

  describe('#previous', () => {
    it('should return previous character without changing position', () => {
      expect(subject.previous).to.eq(subject.peek(-1))
      expect(subject.index).to.eq(index)
    })
  })

  describe('#peekMatch', () => {
    it('should return next match without changing position', () => {
      // Arrange
      const re: RegExp = /^a/y

      // Act
      const result = subject.peekMatch(re)

      // Expect
      expect(result).to.not.be.null
      expect(subject.index).to.eq(index)
    })

    it('should return null if no match at current position', () => {
      // Arrange
      const re: RegExp = /^b/y

      // Act
      const result = subject.peekMatch(re)

      // Expect
      expect(result).to.be.null
      expect(subject.index).to.eq(index)
    })
  })
})
