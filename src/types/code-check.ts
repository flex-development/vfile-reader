/**
 * @file Type Aliases - CodeCheck
 * @module vfile-reader/types/CodeCheck
 */

import type Code from './code'

/**
 * Check whether a character code, or sequence of codes, matches the bound test.
 *
 * @see {@linkcode Code}
 *
 * @param {Code | Code[]} code - Code or code sequence to check
 * @return {boolean} `true` if `code` matches bound test
 */
type CodeCheck = (code: Code | Code[]) => boolean

export type { CodeCheck as default }
