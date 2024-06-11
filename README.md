# vfile-reader

[![github release](https://img.shields.io/github/v/release/flex-development/vfile-reader.svg?include_prereleases&sort=semver)](https://github.com/flex-development/vfile-reader/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/vfile-reader.svg)](https://npmjs.com/package/@flex-development/vfile-reader)
[![codecov](https://codecov.io/gh/flex-development/vfile-reader/graph/badge.svg?token=XJBC8OxhNZ)](https://codecov.io/gh/flex-development/vfile-reader)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/vfile-reader.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits&logoColor=ffffff)](https://conventionalcommits.org/)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript&logoColor=ffffff)](https://typescriptlang.org/)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat&logo=vitest&logoColor=ffffff)](https://vitest.dev/)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat&logo=yarn&logoColor=ffffff)](https://yarnpkg.com/)

[vfile][vfile] utility to read characters from a file

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
  - [`Reader(file[, start])`](#readerfile-start)
    - [`Reader#eof`](#readereof)
    - [`Reader#includes(value)`](#readerincludesvalue)
    - [`Reader#index`](#readerindex)
    - [`Reader#next`](#readernext)
    - [`Reader#now()`](#readernow)
    - [`Reader#offset([point])`](#readeroffsetpoint)
    - [`Reader#output`](#readeroutput)
    - [`Reader#peek([k])`](#readerpeekk)
    - [`Reader#point([offset])`](#readerpointoffset)
    - [`Reader#previous`](#readerprevious)
    - [`Reader#read([k])`](#readerreadk)
    - [`Reader#reset()`](#readerreset)
    - [`Reader#slice(m)`](#readerslicem)
    - [`Reader#start`](#readerstart)
  - [`CharacterReader(file[, start])`](#characterreaderfile-start)
    - [`CharacterReader#peekMatch(test)`](#characterreaderpeekmatchtest)
  - [`CharacterMatch`](#charactermatch)
  - [`Character`](#character)
  - [`ReaderIterator<T>`](#readeriteratort)
  - [`ReaderIteratorResult`](#readeriteratorresult)
  - [`ReaderValue`](#readervalue)
- [Types](#types)
- [Contribute](#contribute)

## What is this?

This package implements an input reader that can be used to read characters from a file.

## When should I use this?

This package is useful when characters need to be read individually or by regex match, such as when building a parser or
tokenizer.

## Install

This package is [ESM only][esm].

In Node.js (version 18+) with [yarn][yarn]:

```sh
yarn add @flex-development/vfile-reader
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import { CharacterReader } from 'https://esm.sh/@flex-development/vfile-reader'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import { CharacterReader } from 'https://esm.sh/@flex-development/vfile-reader'
</script>
```

## Use

```ts
import { CharacterReader } from '@flex-development/vfile-reader'
import { read } from 'to-vfile'
import type { VFile } from 'vfile'

const file: VFile = await read('__fixtures__/emojis.txt') // 😍👍🚀❇️

const chars: CharacterReader = new CharacterReader(file)

// for (const char of chars) console.dir({ char, now: chars.now() })

while (!chars.eof) console.dir({ char: chars.read(), now: chars.now() })
```

...yields

```sh
{ char: '😍', now: { column: 1, line: 1, offset: 0 } }
{ char: '👍', now: { column: 2, line: 1, offset: 1 } }
{ char: '🚀', now: { column: 3, line: 1, offset: 2 } }
{ char: '❇', now: { column: 4, line: 1, offset: 3 } }
{ char: '️', now: { column: 5, line: 1, offset: 4 } }
{ char: '\n', now: { column: 6, line: 1, offset: 5 } }
```

## API

This package exports the following identifiers:

- [`CharacterReader`](#characterreaderfile-start)
- [`Reader`](#readerfile-start)

There is no default export.

### `Reader(file[, start])`

> **extends**: [`Location`][location]\
> **implements**: [`ReaderIterator<T>`](#readeriteratort)

Create a new input reader.

Pass a `start` point to make reader locations relative to a specific place. Any point or offset accessed will be
relative to the given point.

**Note**: This is an abstract class and must be extended.

- `file` ([`Value`][vfile-value] | [`VFile`][vfile-api]) &mdash; file to read
- `start` ([`Point`][point] | `null` | `undefined`) &mdash; point before first reader value

#### <small>Type Parameters</small>

- `T` ([`ReaderValue`](#readervalue)) &mdash; reader output value

#### `Reader#eof`

(`boolean`) Boolean indicating if reader has reached the end of file, with `true` denoting end of file.

#### `Reader#includes(value)`

Check if the file contains the given search `value`, relative to the current reader position.

##### `Parameters`

- `value` (`string`) &mdash; value to search for in file

##### `Returns`

(`boolean`) `true` if file contains search `value`.

#### `Reader#index`

([`Offset`][offset]) Index of current reader value.

#### `Reader#next()`

Get the next reader result.

Unlike [`peek`](#readerpeekk), this method changes the position of the reader.

##### `Returns`

([`ReaderIteratorResult<T>`](#readeriteratorresult)) Next reader result.

#### `Reader#now()`

Get the current point in the file.

##### `Returns`

([`Point`][point]) Current point in file, relative to [`reader#start`](#readerstart).

#### `Reader#offset([point])`

See [`Location#offset([point])`][locationoffset-point].

#### `Reader#output`

(`T`) Current reader value or `null`, with `null` denoting end of file. Equivalent to
[`reader.peek(0)`](#readerpeekk).

#### `Reader#peek([k])`

Get the next `k`-th reader value from the file without changing the position of the reader, with `null` denoting end of
file.

##### `Parameters`

- `k` (`number | undefined`) &mdash; difference between index of next `k`-th reader value and index of current value
  - **default**: `1`

##### `Returns`

(`T`) Peeked reader value or `null`.

#### `Reader#point([offset])`

See [`Location#point([offset])`][locationpoint-offset].

#### `Reader#previous`

(`T`) Previous reader value or `null`, with `null` denoting beginning or end of file. Equivalent to
[`reader.peek(-1)`](#readerpeekk).

#### `Reader#read([k])`

Get the next `k`-th reader value from the file, with `null` denoting end of file.

Unlike [`peek`](#readerpeekk), this method changes the position of the reader.

##### `Parameters`

- `k` (`number | undefined`) &mdash; difference between index of next `k`-th reader value and index of current value
  - **default**: `1`

##### `Returns`

(`T`) Next `k`-th reader value or `null`.

#### `Reader#reset()`

Reset the position of the reader.

##### `Returns`

(`this`) The repositioned reader.

#### `Reader#slice(m)`

Get a slice of the most recent reader values, with the last value being the current reader value, without changing the
position of the reader.

##### `Parameters`

- `m` (`number`) &mdash; maximum number of reader values to include in slice

##### `Returns`

(`NonNullable<T>[]`) Reader values slice.

#### `Reader#start`

([`Point`][point]) Point before first reader value in file.

### `CharacterReader(file[, start])`

> **extends**: [`Reader`](#readerfile-start)

Create a new character reader.

#### `CharacterReader#peekMatch(test)`

Get the next match from the file without changing the position of the reader, with `null` denoting no match.

##### `Parameters`

- `test` (`RegExp`) &mdash; character test

##### `Returns`

([`CharacterMatch`](#charactermatch)) Peeked character match or `null`.

### `CharacterMatch`

Match in a source file, with `null` denoting no match (TypeScript type).

```ts
type CharacterMatch = RegExpExecArray | null
```

### `Character`

Character in a source file, with `null` denoting the end of file (TypeScript type).

```ts
type Character = string | null
```

### `ReaderIterator<T>`

Input reader iterator API (TypeScript interface).

```ts
interface ReaderIterator<T extends ReaderValue = ReaderValue> {
  [Symbol.iterator](): ReaderIterator<T>
  next(): ReaderIteratorResult<T>
}
```

### `ReaderIteratorResult`

Union of iterator results (TypeScript type).

```ts
type ReaderIteratorResult<
  T extends ReaderValue = ReaderValue
> = IteratorReturnResult<T> | IteratorYieldResult<T>
```

### `ReaderValue`

Union of input reader output values (TypeScript type).

```ts
type ReaderValue = Character
```

## Types

This package is fully typed with [TypeScript][typescript].

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

This project has a [code of conduct](CODE_OF_CONDUCT.md). By interacting with this repository, organization, or
community you agree to abide by its terms.

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[esmsh]: https://esm.sh/
[location]: https://github.com/flex-development/vfile-location#locationfile-start
[locationoffset-point]: https://github.com/flex-development/vfile-location#locationoffsetpoint
[locationpoint-offset]: https://github.com/flex-development/vfile-location#locationpointoffset
[offset]: https://github.com/flex-development/unist-util-types#offset
[point]: https://github.com/flex-development/vfile-location#point
[typescript]: https://www.typescriptlang.org
[vfile-api]: https://github.com/vfile/vfile#vfileoptions
[vfile-value]: https://github.com/vfile/vfile#value
[vfile]: https://github.com/vfile/vfile
[yarn]: https://yarnpkg.com
