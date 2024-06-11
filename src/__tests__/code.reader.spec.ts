/**
 * @file Unit Tests - CodeReader
 * @module vfile-reader/tests/unit/CodeReader
 */

import type { Offset } from '@flex-development/unist-util-types'
import { read } from 'to-vfile'
import TestSubject from '../code.reader'

describe('unit:CodeReader', () => {
  let index: Offset
  let subject: TestSubject

  beforeAll(async () => {
    subject = new TestSubject(await read('__fixtures__/emojis.txt'))
    index = subject.index
  })

  describe('#output', () => {
    it('should return current code point without changing position', () => {
      expect(subject.output).to.equal(subject.peek(0))
      expect(subject.index).to.eq(index)
    })
  })

  describe('#previous', () => {
    it('should return previous code point without changing position', () => {
      expect(subject.previous).to.eq(subject.peek(-1))
      expect(subject.index).to.eq(index)
    })
  })
})
