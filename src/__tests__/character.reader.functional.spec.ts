/**
 * @file Functional Tests - CharacterReader
 * @module vfile-reader/tests/functional/CharacterReader
 */

import type { Character } from '#src/types'
import type { MockInstance } from '#tests/interfaces'
import { read } from 'to-vfile'
import type { VFile } from 'vfile'
import Reader from '../abstract.reader'
import TestSubject from '../character.reader'

describe('functional:CharacterReader', () => {
  let file: VFile
  let subject: TestSubject

  beforeAll(async () => {
    file = await read('__fixtures__/alphabet.txt')
    subject = new TestSubject(file)
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

  describe('#slice', () => {
    let spy: MockInstance<Reader['slice']>

    beforeEach(() => {
      spy = vi.spyOn(Reader.prototype, 'slice')
    })

    it('should call Reader.prototype.slice', () => {
      // Arrange
      const m: number = 1

      // Act
      subject.slice(m)

      // Expect
      expect(spy).toHaveBeenCalledOnce()
      expect(spy).toHaveBeenCalledWith(m)
    })
  })

  describe('iterator', () => {
    it('should iterate over all characters', () => {
      // Arrange
      const chars: Character[] = []

      // Act
      for (const char of subject) chars.push(char)

      // Expect
      expect(chars).toMatchSnapshot()
    })
  })
})
