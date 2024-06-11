/**
 * @file Type Aliases - Code
 * @module vfile-reader/types/Code
 */

/**
 * An integer between `0` and `0x10FFFF` (inclusive) representing a Unicode code
 * point in a source file, with `null` denoting end of file.
 */
type Code = number | null

export type { Code as default }
