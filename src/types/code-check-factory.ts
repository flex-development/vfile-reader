/**
 * @file Type Aliases - CodeCheckFactory
 * @module vfile-reader/types/CodeCheckFactory
 */

import type Code from './code'
import type CodeCheck from './code-check'

/**
 * Create a code check from a character code or regular expression.
 *
 * @see {@linkcode CodeCheck}
 * @see {@linkcode Code}
 *
 * @param {Code | RegExp} test - Test to create check from
 * @return {CodeCheck} Code check
 */
type CodeCheckFactory = (test: Code | RegExp) => CodeCheck

export type { CodeCheckFactory as default }
