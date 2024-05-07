/**
 * @file Unit Tests - Reader
 * @module vfile-reader/tests/unit/Reader
 */

import { define } from '@flex-development/tutils'
import type { Point } from '@flex-development/vfile-location'
import { read } from 'to-vfile'
import type { VFile, Value } from 'vfile'
import TestSubject from '../reader'

describe('unit:Reader', () => {
  let file: VFile
  let length: number
  let source: string

  beforeAll(async () => {
    file = await read('__fixtures__/hrt.ts')
    length = (source = String(file)).length
  })

  describe('#char', () => {
    let k: number
    let subject: TestSubject

    beforeAll(() => {
      k = 0
      subject = new TestSubject(file)
    })

    it('should return current character without changing position', () => {
      expect(subject.char).to.eq(subject.peek(k)).and.eq(subject.peek(k))
    })
  })

  describe('#eof', () => {
    it('should return false if #index < source file length', () => {
      expect(new TestSubject(file).eof).to.be.false
    })

    it('should return true if #index === source file length', () => {
      expect(new TestSubject('').eof).to.be.true
    })

    it('should return true if #index > source file length', () => {
      // Arrange
      const subject: TestSubject = new TestSubject(file)

      // Act + Expect
      expect(define(subject, 'position', { value: length + 1 }).eof).to.be.true
    })
  })

  describe('#index', () => {
    it('should return current position in source file', () => {
      expect(new TestSubject(file)).to.have.property('index', 0)
    })
  })

  describe('#now', () => {
    it('should return current point in source file', () => {
      expect(new TestSubject(file).now()).to.eql({
        column: 1,
        line: 1,
        offset: 0
      })
    })

    it('should return current point in source file (relative)', () => {
      // Arrange
      const end: Pick<Point, 'offset'> = { offset: 1103 }
      const start: Point = { column: 3, line: 29, offset: 646 }
      const value: Value = source.slice(start.offset, end.offset)

      // Act + Expect
      expect(new TestSubject(value, start).now()).to.eql(start)
    })
  })

  describe('#peek', () => {
    let subject: TestSubject

    beforeAll(() => {
      subject = new TestSubject(file)
    })

    it('should return next k-th character without changing position', () => {
      // Arrange
      const k: number = 4

      // Act + Expect
      expect(subject.peek(k)).to.eq(source[k]).and.eq(subject.peek(k))
    })

    it('should return null if peeking past end of source file', () => {
      expect(subject.peek(length)).to.be.null.and.eq(subject.peek(length))
    })
  })

  describe('#peekMatch', () => {
    let subject: TestSubject

    afterEach(() => {
      define(subject, 'position', { value: 0 })
    })

    beforeAll(() => {
      subject = new TestSubject(file)
    })

    it('should return next match without changing position', () => {
      // Arrange
      const re: RegExp = /^\/\*{1,2}.*?\*\//s

      // Act + Expect
      expect(subject.peekMatch(re)).to.eql(subject.peekMatch(re)).and.not.null
    })

    it('should return null if no match at current position', () => {
      // Arrange
      const re: RegExp = /^\/{2}.*?(?=[\n\r])/s
      re.lastIndex = source.lastIndexOf('// update formatted time')

      // Act + Expect
      expect(re.lastIndex).to.be.greaterThan(-1).and.not.eq(subject.index)
      expect(subject.peekMatch(re)).to.be.null.and.eql(subject.peekMatch(re))
    })
  })

  describe('#previous', () => {
    let k: number
    let subject: TestSubject

    beforeAll(() => {
      k = -1
      subject = new TestSubject(file)
      define(subject, 'position', { value: 1 })
    })

    it('should return previous character without changing position', () => {
      expect(subject.previous).to.eq(subject.peek(k)).and.eq(subject.peek(k))
    })
  })

  describe('#read', () => {
    let subject: TestSubject

    afterEach(() => {
      define(subject, 'position', { value: 0 })
    })

    beforeAll(() => {
      subject = new TestSubject(file)
    })

    it('should return next k-th character', () => {
      expect(subject.read()).to.equal(source[1])
      expect(subject.read()).to.equal(source[2])
      expect(subject.read()).to.equal(source[3])
    })

    it('should return null if reading past end of source file', () => {
      expect(subject.read(length)).to.be.null
    })
  })
})
