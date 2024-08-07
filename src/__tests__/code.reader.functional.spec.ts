/**
 * @file Functional Tests - CodeReader
 * @module vfile-reader/tests/functional/CodeReader
 */

import type { Code, RangeTuple } from '#src/types'
import { read } from 'to-vfile'
import type { VFile } from 'vfile'
import type { MockInstance } from 'vitest'
import Reader from '../abstract.reader'
import TestSubject from '../code.reader'

describe('functional:CodeReader', () => {
  let file: VFile
  let subject: TestSubject

  beforeAll(async () => {
    file = await read('__fixtures__/emojis.txt')
    subject = new TestSubject(file)
  })

  describe('.serialize', () => {
    let spy: MockInstance<(typeof String)['fromCodePoint']>

    beforeEach(() => {
      spy = vi.spyOn(String, 'fromCodePoint')
    })

    it('should call String.fromCodePoint', () => {
      // Arrange
      const codes: Code[] = [10, 13]

      // Act
      TestSubject.serialize(...codes)

      // Expect
      expect(spy).toHaveBeenCalledOnce()
      expect(spy).toHaveBeenCalledWith(...codes)
    })
  })

  describe('#check', () => {
    let spy: MockInstance<TestSubject['check']>

    beforeEach(() => {
      spy = vi.spyOn(TestSubject, 'check')
    })

    it('should call CodeReader.check', () => {
      // Arrange
      const test: RegExp = /\p{ID_Continue}/u

      // Act
      subject.check(test)(null)

      // Expect
      expect(spy).toHaveBeenCalledOnce()
      expect(spy).toHaveBeenCalledWith(test)
    })
  })

  describe('#peek', () => {
    let spy: MockInstance<Reader['peek']>

    beforeEach(() => {
      spy = vi.spyOn(Reader.prototype, 'peek')
    })

    it('should call Reader.prototype.peek', () => {
      // Arrange
      const k: number = 3

      // Act
      subject.peek(k)

      // Expect
      expect(spy).toHaveBeenCalledOnce()
      expect(spy).toHaveBeenCalledWith(k)
    })
  })

  describe('#read', () => {
    let spy: MockInstance<Reader['read']>

    beforeEach(() => {
      spy = vi.spyOn(Reader.prototype, 'read')
    })

    it('should call Reader.prototype.read', () => {
      // Arrange
      const k: number = 0

      // Act
      subject.read(k)

      // Expect
      expect(spy).toHaveBeenCalledOnce()
      expect(spy).toHaveBeenCalledWith(k)
    })
  })

  describe('#serialize', () => {
    let spy: MockInstance<TestSubject['serialize']>

    beforeEach(() => {
      spy = vi.spyOn(TestSubject, 'serialize')
    })

    it('should call CodeReader.serialize', () => {
      // Arrange
      const codes: Code[] = [subject.peek(0), subject.peek(1), subject.peek(13)]

      // Act
      subject.serialize(...codes)

      // Expect
      expect(spy).toHaveBeenCalledOnce()
      expect(spy).toHaveBeenCalledWith(...codes)
    })
  })

  describe('#slice', () => {
    let spy: MockInstance<Reader['slice']>

    beforeEach(() => {
      spy = vi.spyOn(Reader.prototype, 'slice')
    })

    it('should call Reader.prototype.slice', () => {
      // Arrange
      const range: RangeTuple = [{ column: 2, line: 1, offset: 3 }]

      // Act
      subject.slice(range)

      // Expect
      expect(spy).toHaveBeenCalledOnce()
      expect(spy).toHaveBeenCalledWith(range)
    })
  })

  describe('iterator', () => {
    it('should iterate over all codes', () => {
      // Arrange
      const codes: Code[] = []

      // Act
      for (const code of subject) codes.push(code)

      // Expect
      expect(codes).toMatchSnapshot()
    })
  })
})
