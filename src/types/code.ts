/**
 * @file Type Aliases - Code
 * @module vfile-reader/types/Code
 */

/**
 * Character code ([code point][codepointat]) in a source file, with `null`
 * denoting end of file.
 *
 * [codepointat]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt
 */
type Code = number | null

export type { Code as default }
