/**
 * @file Unit Tests - Reader
 * @module vfile-reader/tests/unit/Reader
 */

import type { ReaderValue } from '#src/types'
import type { Point } from '@flex-development/vfile-location'
import { read } from 'to-vfile'
import type { VFile, Value } from 'vfile'
import TestSubject from '../abstract.reader'

describe('unit:Reader', () => {
  let Subject: new (file: Value | VFile, start?: Point | null) => TestSubject
  let file: VFile
  let length: number
  let source: string
  let subject: TestSubject

  afterEach(() => {
    void subject.reset()
  })

  beforeAll(async () => {
    Subject = class Subject extends TestSubject {
      /**
       * Reader values.
       *
       * @protected
       * @readonly
       * @instance
       * @member {ReadonlyArray<NonNullable<ReaderValue>>} values
       */
      protected readonly values!: readonly NonNullable<ReaderValue>[]

      /**
       * Create a new test input reader.
       *
       * @param {Value | VFile} file - File to read
       * @param {(Point | null)?} [start] - Point before first reader value
       */
      constructor(file: Value | VFile, start: Point | null = null) {
        super(file, start)

        Object.defineProperties(this, {
          values: { enumerable: false, value: [...this.source] }
        })
      }
    }

    file = await read('__fixtures__/hrt.ts')
    source = String(file)
    length = source.length
    subject = new Subject(file)
  })

  describe('#eof', () => {
    it('should return false if reader has not reached end of file', () => {
      expect(subject.eof).to.be.false
    })

    it('should return true if reader is at end of file', () => {
      // Arrange
      subject.read(length + 1)

      // Expect
      expect(subject.eof).to.be.true
    })

    it('should return true if reader is past end of file', () => {
      // Arrange
      subject.read(length + 3)

      // Expect
      expect(subject.eof).to.be.true
    })
  })

  describe('#includes', () => {
    it('should return false if file does not contain value from index', () => {
      expect(subject.includes('#!/usr/bin/env node')).to.be.false
    })

    it('should return true if file contains value from index', () => {
      expect(subject.includes('*/')).to.be.true
    })
  })

  describe('#index', () => {
    it('should return index of current reader value', () => {
      // Arrange
      const k: number = 3

      // Act
      subject.read(k)

      // Expect
      expect(subject).to.have.property('index', k - 1)
    })

    it('should return index of initial reader value', () => {
      expect(subject).to.have.property('index', 0)
    })
  })

  describe('#output', () => {
    it('should return current reader value without changing position', () => {
      expect(subject.output).to.eq(subject.peek(0)).and.eq(subject.output)
    })
  })

  describe('#now', () => {
    it('should return current point in file', () => {
      expect(subject.now()).to.eql({ column: 1, line: 1, offset: 0 })
    })

    it('should return current point in file (relative)', () => {
      // Arrange
      const start: Point = { column: 3, line: 29, offset: 646 }

      // Act + Expect
      expect(new Subject('', start).now()).to.eql(start)
    })
  })

  describe('#peek', () => {
    it('should return next k-th reader value without changing position', () => {
      // Arrange
      const k: number = 3

      // Act + Expect
      expect(subject.peek(k)).to.eq(source[k]).and.eq(subject.peek(k))
    })

    it('should return null if peeking past end of file', () => {
      // Arrange
      const k: number = length + 1

      // Act + Expect
      expect(subject.peek(k)).to.be.null.and.eq(subject.peek(k))
    })
  })

  describe('#previous', () => {
    it('should return previous reader value without changing position', () => {
      expect(subject.previous).to.eq(subject.peek(-1)).and.eq(subject.previous)
    })
  })

  describe('#read', () => {
    beforeEach(() => {
      // subject.read(-1)
    })

    it('should return next k-th reader value', () => {
      expect(subject.read()).to.equal(source[0])
      expect(subject.read()).to.equal(source[1])
      expect(subject.read()).to.equal(source[2])
    })

    it('should return null if reading past end of file', () => {
      expect(subject.read(length * 3)).to.be.null
    })
  })

  describe('#reset', () => {
    it('should return repositioned reader', () => {
      // Arrange
      subject.read(13)

      // Act + Expect
      expect(subject.reset()).to.eq(subject).and.have.property('index', 0)
    })
  })

  describe('#slice', () => {
    it('should return empty array if m <= 0', () => {
      ;[-3, 0].forEach(m => {
        expect(subject.slice(m)).to.be.an('array').that.is.empty
      })
    })

    it('should return non-empty array if m > 0', () => {
      // Arrange
      const m: number = 3

      // Act
      subject.read(m)
      const result = subject.slice(m)

      // Expect
      expect(result).to.be.of.length(m).and.have.ordered.members([
        source[0],
        source[1],
        source[2]
      ])
    })
  })
})
