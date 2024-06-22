## [3.1.0](https://github.com/flex-development/vfile-reader/compare/3.0.0...3.1.0) (2024-06-22)

### :package: Build

- [[`f540d05`](https://github.com/flex-development/vfile-reader/commit/f540d05e084645cb200b7d475bde9d7af7888e90)] **deps-dev:** Bump @stylistic/eslint-plugin from 2.2.0 to 2.2.1 ([#80](https://github.com/flex-development/vfile-reader/issues/80))
- [[`477bf0e`](https://github.com/flex-development/vfile-reader/commit/477bf0e379192e13647d8e50b2f69e85be8072a4)] **deps-dev:** Bump @stylistic/eslint-plugin from 2.2.1 to 2.2.2 ([#83](https://github.com/flex-development/vfile-reader/issues/83))
- [[`9b2d538`](https://github.com/flex-development/vfile-reader/commit/9b2d538b01aedba2a78c898c40472e2f97e8bcbe)] **deps-dev:** Bump cspell from 8.8.4 to 8.9.0 ([#84](https://github.com/flex-development/vfile-reader/issues/84))
- [[`64327ad`](https://github.com/flex-development/vfile-reader/commit/64327ad5fb2b4073e530b94885f845637014f576)] **deps-dev:** Bump cspell from 8.9.0 to 8.9.1 ([#85](https://github.com/flex-development/vfile-reader/issues/85))
- [[`d1e2ae2`](https://github.com/flex-development/vfile-reader/commit/d1e2ae2d24ed6f0d3b4869272666a60c54e9a719)] **deps-dev:** Bump dprint from 0.46.2 to 0.46.3 ([#82](https://github.com/flex-development/vfile-reader/issues/82))
- [[`a273fb9`](https://github.com/flex-development/vfile-reader/commit/a273fb92f9003e14e7ab64ca7ecc964d28d17893)] **deps-dev:** Bump globals from 15.4.0 to 15.6.0 ([#81](https://github.com/flex-development/vfile-reader/issues/81))
- [[`82bd047`](https://github.com/flex-development/vfile-reader/commit/82bd0478841df33bb1266dc5e018d8a5659e1fdd)] **deps-dev:** bump typescript from 5.5.0-beta to 5.5.2

### :sparkles: Features

- [[`1a8faa0`](https://github.com/flex-development/vfile-reader/commit/1a8faa051d799002e93705364b74ce725307cd3d)] [`Reader`] nilable file support
- [[`c4f6fc4`](https://github.com/flex-development/vfile-reader/commit/c4f6fc449d80cfc1dce8da164c1a161c6419c9c3)] `chars.nbsp`, `codes.nbsp`

### :house_with_garden: Housekeeping

- [[`1a042d0`](https://github.com/flex-development/vfile-reader/commit/1a042d08f9fb39bc1d0063950a48d0465372012a)] eslint v9 migration

### :mechanical_arm: Refactors

- [[`343728b`](https://github.com/flex-development/vfile-reader/commit/343728bcf755c3efc315d1cf7d2b2fa1f706a72c)] [`chars.bs`] use escape sequence

## [3.0.0](https://github.com/flex-development/vfile-reader/compare/2.0.0...3.0.0) (2024-06-14)

### ⚠ BREAKING CHANGES

- `Reader#sliceSerialize`
- `Reader#slice`
- [`CodeReader`] `#stringify` -> `#serialize`
- [`Reader`] eof code regression

### :package: Build

- [[`ca84f53`](https://github.com/flex-development/vfile-reader/commit/ca84f53c451d8ac034fa01b413aa81aa872278bf)] **deps-dev:** Bump eslint-plugin-chai-expect from 3.0.0 to 3.1.0 ([#76](https://github.com/flex-development/vfile-reader/issues/76))
- [[`82ab725`](https://github.com/flex-development/vfile-reader/commit/82ab725c70a83361dcd2f32a39a9cb5e4bbe689a)] **deps-dev:** Bump eslint-plugin-jsdoc from 48.2.9 to 48.2.12 ([#77](https://github.com/flex-development/vfile-reader/issues/77))
- [[`18d881e`](https://github.com/flex-development/vfile-reader/commit/18d881e970630422ba7766c24ff8141b5b5e97dd)] **deps-dev:** Bump lint-staged from 15.2.5 to 15.2.6 ([#72](https://github.com/flex-development/vfile-reader/issues/72))
- [[`a59eebb`](https://github.com/flex-development/vfile-reader/commit/a59eebb1817cb5a3aa8868f3d9af2b8ca83cfef2)] **deps-dev:** Bump lint-staged from 15.2.6 to 15.2.7 ([#75](https://github.com/flex-development/vfile-reader/issues/75))
- [[`1b30fc3`](https://github.com/flex-development/vfile-reader/commit/1b30fc33b872f1066b6c51f47c6cc33d0c093203)] **deps-dev:** Bump prettier from 3.3.1 to 3.3.2 ([#71](https://github.com/flex-development/vfile-reader/issues/71))
- [[`f25a40c`](https://github.com/flex-development/vfile-reader/commit/f25a40cb0fae26ef4c45b325697f7514ce75869d)] **deps-dev:** Bump the typescript-eslint group with 2 updates ([#70](https://github.com/flex-development/vfile-reader/issues/70))
- [[`1e1d904`](https://github.com/flex-development/vfile-reader/commit/1e1d904d8996332e80157a020633ed08cecc40a7)] **deps:** bump @flex-development/unist-util-types from 1.6.0 to 1.6.1
- [[`ff8e5aa`](https://github.com/flex-development/vfile-reader/commit/ff8e5aaebd8eab2f414b45e605ca733cf786ba40)] **yarn:** bump yarn from 4.2.1 to 4.3.0

### :robot: Continuous Integration

- [[`24f9f4f`](https://github.com/flex-development/vfile-reader/commit/24f9f4f6095ffc6a21ce4690de92430c125fd3db)] **deps:** Bump actions/checkout from 4.1.6 to 4.1.7 ([#74](https://github.com/flex-development/vfile-reader/issues/74))
- [[`cef0f6f`](https://github.com/flex-development/vfile-reader/commit/cef0f6ff63f9526d71ba03ec7046a6d9ad40fe6b)] **deps:** Bump codecov/codecov-action from 4.4.1 to 4.5.0 ([#73](https://github.com/flex-development/vfile-reader/issues/73))

### :pencil: Documentation

- [[`8409caf`](https://github.com/flex-development/vfile-reader/commit/8409cafd341f1296d4ecce18c2b83ba2d8a65ef2)] related

### :sparkles: Features

- [[`8467e3e`](https://github.com/flex-development/vfile-reader/commit/8467e3e34b36bbb7a9fb87527b4a482442c84bdc)] [`CodeReader`] `.check`, `#check`
- [[`4567f01`](https://github.com/flex-development/vfile-reader/commit/4567f016b7a28f5ea6851b7a2bedd7284a6e31fe)] [`CodeReader`] `.serialize`
- [[`c949bdc`](https://github.com/flex-development/vfile-reader/commit/c949bdc6f673f821eabbc00ccdec09a1cf718437)] `chars`, `codes`
- [[`f205a94`](https://github.com/flex-development/vfile-reader/commit/f205a941bbee35d94f1259c4b761acf404169e96)] `Reader#sliceSerialize`

### :bug: Fixes

- [[`4599009`](https://github.com/flex-development/vfile-reader/commit/4599009a8908a9dbf741980893a87a1cbe92d470)] [`Reader`] eof code regression

### :mechanical_arm: Refactors

- [[`c9aecaa`](https://github.com/flex-development/vfile-reader/commit/c9aecaa43fd70163a84f223322c77723cdcd1a18)] [`CodeReader`] `#stringify` -> `#serialize`
- [[`e740f3a`](https://github.com/flex-development/vfile-reader/commit/e740f3a00661ad4bf19d9b3ff3e3ac31c2d51cd6)] `Reader#slice`

## [2.0.0](https://github.com/flex-development/vfile-reader/compare/1.0.2...2.0.0) (2024-06-11)

### ⚠ BREAKING CHANGES

- abstract reader implementation

### :package: Build

- [[`a974d58`](https://github.com/flex-development/vfile-reader/commit/a974d583d5f2a50e820ad4139633d2a6a79871e8)] **deps-dev:** Bump dprint from 0.46.1 to 0.46.2 ([#67](https://github.com/flex-development/vfile-reader/issues/67))
- [[`28a9d5c`](https://github.com/flex-development/vfile-reader/commit/28a9d5c8d385c6c67261335449b48af87b076d93)] **deps-dev:** Bump esbuild from 0.21.4 to 0.21.5 ([#66](https://github.com/flex-development/vfile-reader/issues/66))

### :sparkles: Features

- [[`7fca10d`](https://github.com/flex-development/vfile-reader/commit/7fca10d5be93c2c546f173708000f14c9cef44a9)] `CodeReader`

### :mechanical_arm: Refactors

- [[`2a803f4`](https://github.com/flex-development/vfile-reader/commit/2a803f4c10e492390a5cd0341cf849f79f97a96c)] abstract reader implementation

## [1.0.2](https://github.com/flex-development/vfile-reader/compare/1.0.1...1.0.2) (2024-06-08)

### :package: Build

- [[`63f7a6f`](https://github.com/flex-development/vfile-reader/commit/63f7a6f647b878e5e0f1ae88f546cc2969d4350f)] **deps-dev:** Bump cspell from 8.8.3 to 8.8.4 ([#60](https://github.com/flex-development/vfile-reader/issues/60))
- [[`72f6554`](https://github.com/flex-development/vfile-reader/commit/72f655432f4859db903f4916f0cdfead5d9feb06)] **deps-dev:** Bump dprint from 0.45.1 to 0.46.1 ([#44](https://github.com/flex-development/vfile-reader/issues/44))
- [[`7f85736`](https://github.com/flex-development/vfile-reader/commit/7f857363440924edab4fca53583fc56c4399faa3)] **deps-dev:** Bump esbuild from 0.21.3 to 0.21.4 ([#48](https://github.com/flex-development/vfile-reader/issues/48))
- [[`d80c9a6`](https://github.com/flex-development/vfile-reader/commit/d80c9a63ddfdab954ec7d98f92a338b2ec872d93)] **deps-dev:** Bump eslint-plugin-jsdoc from 48.2.6 to 48.2.7 ([#53](https://github.com/flex-development/vfile-reader/issues/53))
- [[`51d864f`](https://github.com/flex-development/vfile-reader/commit/51d864fcda5b7db68478c5d80c87e61836645920)] **deps-dev:** Bump eslint-plugin-jsdoc from 48.2.7 to 48.2.8 ([#62](https://github.com/flex-development/vfile-reader/issues/62))
- [[`2b63327`](https://github.com/flex-development/vfile-reader/commit/2b633275b3b75194313bc25312fba5c0868e4390)] **deps-dev:** Bump eslint-plugin-jsdoc from 48.2.8 to 48.2.9 ([#63](https://github.com/flex-development/vfile-reader/issues/63))
- [[`8f25f3b`](https://github.com/flex-development/vfile-reader/commit/8f25f3b090d0bb01785bb07991967854bbc5a718)] **deps-dev:** Bump eslint-plugin-jsonc from 2.15.1 to 2.16.0 ([#46](https://github.com/flex-development/vfile-reader/issues/46))
- [[`4ab386c`](https://github.com/flex-development/vfile-reader/commit/4ab386c1eff27235dfe46d07402f0e6bff243b8f)] **deps-dev:** Bump eslint-plugin-promise from 6.1.1 to 6.2.0 ([#45](https://github.com/flex-development/vfile-reader/issues/45))
- [[`07d6c8d`](https://github.com/flex-development/vfile-reader/commit/07d6c8d4056285b43d257c5f383153a12a3bc5d4)] **deps-dev:** Bump lint-staged from 15.2.4 to 15.2.5 ([#43](https://github.com/flex-development/vfile-reader/issues/43))
- [[`0bd6d49`](https://github.com/flex-development/vfile-reader/commit/0bd6d496ce6da9a1da77b664e549b95fea3ed57a)] **deps-dev:** Bump prettier from 3.2.5 to 3.3.0 ([#56](https://github.com/flex-development/vfile-reader/issues/56))
- [[`85c9b02`](https://github.com/flex-development/vfile-reader/commit/85c9b0251d55cc4f275910559c98e78634767da8)] **deps-dev:** Bump prettier from 3.3.0 to 3.3.1 ([#61](https://github.com/flex-development/vfile-reader/issues/61))
- [[`c07f0a6`](https://github.com/flex-development/vfile-reader/commit/c07f0a621c4757d4e2310ce409898447baa7bde6)] **deps-dev:** Bump the typescript-eslint group with 2 updates ([#49](https://github.com/flex-development/vfile-reader/issues/49))
- [[`93abab1`](https://github.com/flex-development/vfile-reader/commit/93abab12eae3548d943c78cfd269fe08f52e9901)] **deps-dev:** Bump the typescript-eslint group with 2 updates ([#59](https://github.com/flex-development/vfile-reader/issues/59))
- [[`8091c88`](https://github.com/flex-development/vfile-reader/commit/8091c88f51cc80db7a816772dc91940778c4e89e)] **deps-dev:** Bump yaml-eslint-parser from 1.2.2 to 1.2.3 ([#47](https://github.com/flex-development/vfile-reader/issues/47))
- [[`391bc89`](https://github.com/flex-development/vfile-reader/commit/391bc894283af80c44c74f6a2dc0744c5bb7fca6)] **deps:** Bump @flex-development/unist-util-types from 1.4.0 to 1.6.0 in the flex-development group ([#51](https://github.com/flex-development/vfile-reader/issues/51))

### :robot: Continuous Integration

- [[`33d95bc`](https://github.com/flex-development/vfile-reader/commit/33d95bccba4ffc7563073c7970ae7bf79a6641ad)] **deps:** Bump actions/create-github-app-token from 1.10.0 to 1.10.1 ([#58](https://github.com/flex-development/vfile-reader/issues/58))

### :bug: Fixes

- [[`5d04761`](https://github.com/flex-development/vfile-reader/commit/5d047615ed83c6ba4a0f2aea89142ab830b1154b)] [`peekMatch`] sticky flag support
- [[`8968007`](https://github.com/flex-development/vfile-reader/commit/89680075a5c1634d9589c0ee5d10358f61d46d75)] unicode support

## [1.0.1](https://github.com/flex-development/vfile-reader/compare/1.0.0...1.0.1) (2024-05-26)

### :package: Build

- [[`d660022`](https://github.com/flex-development/vfile-reader/commit/d660022600ebfc94236fa77b6e5f543a467cc41e)] **deps-dev:** Bump cspell from 8.8.2 to 8.8.3 ([#39](https://github.com/flex-development/vfile-reader/issues/39))
- [[`9ac705e`](https://github.com/flex-development/vfile-reader/commit/9ac705e0e9e2513877979fa1458dd36637fbfef2)] **deps-dev:** Bump eslint-plugin-jsdoc from 48.2.5 to 48.2.6 ([#37](https://github.com/flex-development/vfile-reader/issues/37))
- [[`fe1b09a`](https://github.com/flex-development/vfile-reader/commit/fe1b09a713f6e6449bd63a90d320bf12e42a0889)] **deps:** bump @flex-development/vfile-location from 1.0.0 to 1.0.1

## 1.0.0 (2024-05-23)

### :package: Build

- [[`771656b`](https://github.com/flex-development/vfile-reader/commit/771656b54c7484d3e1097973afdcdef58faf69a9)] **deps-dev:** Bump chai from 5.1.0 to 5.1.1 ([#9](https://github.com/flex-development/vfile-reader/issues/9))
- [[`007b476`](https://github.com/flex-development/vfile-reader/commit/007b4761bf36785af5e0a052f4e7b140ab0877c6)] **deps-dev:** Bump cspell from 8.8.0 to 8.8.1 ([#12](https://github.com/flex-development/vfile-reader/issues/12))
- [[`9551bec`](https://github.com/flex-development/vfile-reader/commit/9551bec9e97d7c56ab393dc9ef5af8a7901acd93)] **deps-dev:** Bump cspell from 8.8.1 to 8.8.2 ([#34](https://github.com/flex-development/vfile-reader/issues/34))
- [[`c295adc`](https://github.com/flex-development/vfile-reader/commit/c295adc89b36e172176daea32d6d4e826bfd8d01)] **deps-dev:** Bump esbuild from 0.20.2 to 0.21.0 ([#5](https://github.com/flex-development/vfile-reader/issues/5))
- [[`9b99fae`](https://github.com/flex-development/vfile-reader/commit/9b99faebf754e8445f75d1ff98d9e92e4d1bb128)] **deps-dev:** Bump esbuild from 0.21.0 to 0.21.1 ([#7](https://github.com/flex-development/vfile-reader/issues/7))
- [[`2716c37`](https://github.com/flex-development/vfile-reader/commit/2716c37ecf2d1b0749c47d62cf1314ff344441cb)] **deps-dev:** Bump esbuild from 0.21.1 to 0.21.2 ([#15](https://github.com/flex-development/vfile-reader/issues/15))
- [[`344d517`](https://github.com/flex-development/vfile-reader/commit/344d517418688493ada20f1761640371b762b141)] **deps-dev:** Bump esbuild from 0.21.2 to 0.21.3 ([#21](https://github.com/flex-development/vfile-reader/issues/21))
- [[`201099e`](https://github.com/flex-development/vfile-reader/commit/201099e194a39b217b731a6dcf6237125aff7992)] **deps-dev:** Bump eslint-plugin-jsdoc from 48.2.3 to 48.2.4 ([#14](https://github.com/flex-development/vfile-reader/issues/14))
- [[`844ba22`](https://github.com/flex-development/vfile-reader/commit/844ba2206229413cc0c76847f4ece1b49c693f70)] **deps-dev:** Bump eslint-plugin-jsdoc from 48.2.4 to 48.2.5 ([#22](https://github.com/flex-development/vfile-reader/issues/22))
- [[`ba287fd`](https://github.com/flex-development/vfile-reader/commit/ba287fd79d78ac95cccfb5442b5daad6c76f3d42)] **deps-dev:** Bump eslint-plugin-unicorn from 52.0.0 to 53.0.0 ([#13](https://github.com/flex-development/vfile-reader/issues/13))
- [[`a2743aa`](https://github.com/flex-development/vfile-reader/commit/a2743aa19dfb8ed29e9a1c53edf528aa98ac43ae)] **deps-dev:** Bump lint-staged from 15.2.2 to 15.2.4 ([#31](https://github.com/flex-development/vfile-reader/issues/31))
- [[`2d86534`](https://github.com/flex-development/vfile-reader/commit/2d86534fa2aba06267854b824837063f34da8f9b)] **deps-dev:** Bump the typescript-eslint group with 2 updates ([#17](https://github.com/flex-development/vfile-reader/issues/17))
- [[`6ae883b`](https://github.com/flex-development/vfile-reader/commit/6ae883bf6bb4467a1e79cbdc0abd2d99fd3f458a)] **deps-dev:** Bump the typescript-eslint group with 2 updates ([#28](https://github.com/flex-development/vfile-reader/issues/28))

### :robot: Continuous Integration

- [[`b0f731f`](https://github.com/flex-development/vfile-reader/commit/b0f731f42a30dcb83bde9098bd2ff57dc3585905)] **deps:** Bump actions/checkout from 4.1.4 to 4.1.5 ([#1](https://github.com/flex-development/vfile-reader/issues/1))
- [[`a589c6b`](https://github.com/flex-development/vfile-reader/commit/a589c6b05493f833385a386f50572fd26910d799)] **deps:** Bump actions/checkout from 4.1.5 to 4.1.6 ([#24](https://github.com/flex-development/vfile-reader/issues/24))
- [[`5e42b16`](https://github.com/flex-development/vfile-reader/commit/5e42b16f214d38c45865cc438b25b7dcafa50ac0)] **deps:** Bump codecov/codecov-action from 4.3.1 to 4.4.0 ([#19](https://github.com/flex-development/vfile-reader/issues/19))
- [[`cced39a`](https://github.com/flex-development/vfile-reader/commit/cced39a03fb8142b4c65ee63ad8f614c79c1035f)] **deps:** Bump codecov/codecov-action from 4.4.0 to 4.4.1 ([#27](https://github.com/flex-development/vfile-reader/issues/27))
- [[`4548902`](https://github.com/flex-development/vfile-reader/commit/4548902f68ca3e5ca4d1f7a394412240384d9350)] **deps:** Bump octokit/graphql-action from 2.2.25 to 2.3.1 ([#2](https://github.com/flex-development/vfile-reader/issues/2))
- [[`32e67d6`](https://github.com/flex-development/vfile-reader/commit/32e67d6b45673d3a6902e103b2f060e944f28598)] **deps:** Bump octokit/graphql-action from 2.3.1 to 2.3.2 ([#32](https://github.com/flex-development/vfile-reader/issues/32))

### :pencil: Documentation

- [[`72b29df`](https://github.com/flex-development/vfile-reader/commit/72b29df1c3e31986882e53b635a08ce37073e11c)] fix `Reader#now()`
- [[`1ea4f58`](https://github.com/flex-development/vfile-reader/commit/1ea4f583dc9b953cbf9c3e63fa801b8c33cfe5d3)] use
- [[`85ab940`](https://github.com/flex-development/vfile-reader/commit/85ab94023594f8089a10741bd05a571132ec6bf9)] what is this?
- [[`edd09a9`](https://github.com/flex-development/vfile-reader/commit/edd09a93bdbf2619dc4aeafbdf0ee2e0ace222b7)] when should I use this?

### :sparkles: Features

- [[`d16a46e`](https://github.com/flex-development/vfile-reader/commit/d16a46e4243b333b8c0811aa7c329a649d705321)] `Reader#previous`
- [[`a659ea3`](https://github.com/flex-development/vfile-reader/commit/a659ea3aa2d250e8d8ac8cdf3b1ed97ee09c7d2f)] `Reader`

### :house_with_garden: Housekeeping

- [[`a512390`](https://github.com/flex-development/vfile-reader/commit/a512390df6e0b65146ca8d3516622fa1e48a6c21)] initial commit







