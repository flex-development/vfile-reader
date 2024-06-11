/**
 * @file Type Aliases - ReaderValue
 * @module vfile-reader/types/ReaderValue
 */

import type Character from './character'
import type Code from './code'

/**
 * Character or code point in a source file, with `null` denoting the end of
 * file.
 *
 * @see {@linkcode Character}
 * @see {@linkcode Code}
 */
type ReaderValue = Character | Code

export type { ReaderValue as default }
