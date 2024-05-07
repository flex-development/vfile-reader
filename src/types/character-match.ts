/**
 * @file Type Aliases - CharacterMatch
 * @module vfile-reader/types/CharacterMatch
 */

/**
 * Match in a source file, with `null` denoting no match
 */
type CharacterMatch = RegExpExecArray | null

export type { CharacterMatch as default }
