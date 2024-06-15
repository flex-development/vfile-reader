/**
 * @file Unit Tests - CodeReader
 * @module vfile-reader/tests/unit/CodeReader
 */

import type { Code } from '#src/types'
import { regexp } from '@flex-development/tutils'
import type { Offset } from '@flex-development/unist-util-types'
import { read } from 'to-vfile'
import type { VFile } from 'vfile'
import TestSubject from '../code.reader'
import codes from '../codes'

describe('unit:CodeReader', () => {
  let file: VFile
  let index: Offset
  let subject: TestSubject

  beforeAll(async () => {
    subject = new TestSubject(file = await read('__fixtures__/emojis.txt'))
    index = subject.index
  })

  describe('.check', () => {
    it('should return code check (code test)', () => {
      expect(TestSubject.check(codes.eof)(subject.output)).to.be.false
    })

    it('should return code check (regex test)', () => {
      expect(TestSubject.check(/[^\u0000-\u007F]/u)(subject.output)).to.be.true
    })

    it('should return code check (sequence regex test)', () => {
      // Arrange
      const test: RegExp = new RegExp('^' + regexp(String(file)) + '$', 'u')
      const codes: Code[] = subject.slice([subject.start.offset, 6])

      // Act + Expect
      expect(TestSubject.check(test)(codes)).to.be.true
    })
  })

  describe('#output', () => {
    it('should return current code without changing position', () => {
      expect(subject.output).to.equal(subject.peek(0))
      expect(subject.index).to.eq(index)
    })
  })

  describe('#previous', () => {
    it('should return previous code without changing position', () => {
      expect(subject.previous).to.eq(subject.peek(-1))
      expect(subject.index).to.eq(index)
    })
  })
})
