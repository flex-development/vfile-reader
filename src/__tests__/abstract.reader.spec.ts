/**
 * @file Unit Tests - Reader
 * @module vfile-reader/tests/unit/Reader
 */

import type { ReaderValue, ReaderValues } from '#src/types'
import type { Offset } from '@flex-development/unist-util-types'
import type { Point } from '@flex-development/vfile-location'
import { read } from 'to-vfile'
import type { VFile, Value } from 'vfile'
import type { MockInstance } from 'vitest'
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
       * Reader output values.
       *
       * @protected
       * @readonly
       * @instance
       * @member {ReaderValues} values
       */
      protected readonly values!: ReaderValues

      /**
       * Create a new test input reader.
       *
       * @param {Value | VFile} file - File to read
       * @param {(Point | null)?} [start] - Point before first reader value
       */
      constructor(file: Value | VFile, start: Point | null = null) {
        super(file, start)
        this.init([...this.source])
      }

      /**
       * Convert the specified sequence of reader values to a string.
       *
       * @public
       * @instance
       *
       * @param {ReaderValue[]} values - Reader value sequence
       * @return {string} String created from reader value sequence
       */
      public serialize(...values: ReaderValue[]): string {
        return values.join('')
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
    let end: Point
    let slice: ReaderValue[]
    let start: Point

    beforeAll(() => {
      end = { column: 4, line: 1, offset: 3 }
      start = { column: 1, line: 1, offset: 0 }

      slice = [source[0]!, source[1]!, source[2]!]
    })

    it('should return reader value slice (position)', () => {
      expect(subject.slice({ end, start })).to.eql(slice)
    })

    it('should return reader value slice (tuple)', () => {
      expect(subject.slice([start.offset, end.offset])).to.eql(slice)
    })
  })

  describe('#sliceSerialize', () => {
    let range: [Offset, Offset]
    let serialize: MockInstance<TestSubject['serialize']>
    let slice: MockInstance<TestSubject['slice']>

    beforeEach(() => {
      serialize = vi.spyOn(subject, 'serialize')
      slice = vi.spyOn(subject, 'slice')

      subject.sliceSerialize(range = [112, 114])
    })

    it('should call #serialize', () => {
      expect(serialize).toHaveBeenCalledOnce()
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      expect(serialize).toHaveBeenCalledWith(...slice.mock.results[0]!.value)
    })

    it('should call #slice', () => {
      expect(slice).toHaveBeenCalledOnce()
      expect(slice).toHaveBeenCalledWith(range)
    })
  })
})
