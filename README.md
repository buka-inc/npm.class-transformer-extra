# @buka/class-transformer-extra

[class-transformer]: https://github.sheincorp.cn/typestack/class-transformer
[npm]: https://www.npmjs.com/package/@buka/class-transformer-extra

[![version](https://img.shields.io/npm/v/@buka/class-transformer-extra.svg?logo=npm&style=for-the-badge)][npm]
[![downloads](https://img.shields.io/npm/dm/@buka/class-transformer-extra.svg?logo=npm&style=for-the-badge)][npm]
[![dependencies](https://img.shields.io/librariesio/release/npm/@buka/class-transformer-extra?logo=npm&style=for-the-badge)][npm]
[![license](https://img.shields.io/npm/l/@buka/class-transformer-extra.svg?logo=github&style=for-the-badge)][npm]
[![Codecov](https://img.shields.io/codecov/c/gh/buka-lnc/npm.class-transformer-extra?logo=codecov&token=PLF0DT6869&style=for-the-badge)](https://codecov.io/gh/buka-lnc/npm.class-transformer-extra)

`@buka/class-transformer-extra` contains methods that's aren't included in the [`class-transformer`][class-transformer] package.

## Install

```shell
npm install @buka/class-transformer-extra class-transformer
# OR
yarn install @buka/class-transformer-extra class-transformer
# OR
pnpm install @buka/class-transformer-extra class-transformer
```

## Usage

### String

| method               | before transformer | after transformer |
| :------------------- | :----------------- | :---------------- |
| `@Split(",")`        | `"a,b,c"`          | `["a", "b", "c"]` |
| `@Trim()`            | `"  abc  "`        | `"abc"`           |
| `@ToString()`        | `123`              | `"123"`           |
| `@ToLowerCase()`     | `"ABC"`            | `"abc"`           |
| `@ToUpperCase()`     | `"abc"`            | `"ABC"`           |
| `@Replace("-", "_")` | `"a-b-c"`          | `"a_b_c"`         |

### Date

| method                      | before transformer | after transformer        |
| :-------------------------- | :----------------- | :----------------------- |
| `@ToDate()`                 | `"2024-01-01"`     | `new Date("2024-01-01")` |
| `@FormatDate("YYYY/MM/DD")` | `"2024-01-01"`     | `"2024/01/01"`           |

### Number

| method        | before transformer | after transformer |
| :------------ | :----------------- | :---------------- |
| `@ToNumber()` | `"123"`            | `123`             |
| `@ToBigInt()` | `"123"`            | `123n`            |

### Boolean

| method         | before transformer | after transformer |
| :------------- | :----------------- | :---------------- |
| `@ToBoolean()` | `1`                | `true`            |

> ToBoolean() has multiple parameters to adapt to different needs, examples:
>
> > `ToBoolean(v => Boolean(v)), { optional: true })`:
> > If the value is `undefined`, do nothing. Otherwise, `v => Boolean(v)` will be used to transform value.
>
> > `ToBoolean(['0', 'false', false], { optional: true })`:
> >
> > If the value is `'0'` or `'false'` or `false`, transform to `false`, and if the value is `undefined`, do nothing, otherwise value will be transform to `true`.

### Array

| method                              | before transformer      | after transformer |
| :---------------------------------- | :---------------------- | :---------------- |
| `@Filter((num: number) => num > 3)` | `[1,2,3.4,5]`           | `[4,5]`           |
| `@Flatten()`                        | `[1, [2, [3, 4, [5]]]]` | `[1,2,3,4,5]`     |
| `@Uniq()`                           | `[1,1,2,3,4,4,5]`       | `[1,2,3,4,5]`     |
| `@UniqBy(Math.abs)`                 | `[-1, 1, 2, 3, -3]`     | `[-1, 2, 3]`      |

## Contribute

If you want to report bug or add new decorators, please submit an Issue or Pull Request.
