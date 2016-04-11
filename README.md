# ss-checkvar

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![Downloads][download-badge]][npm-url]

> checks a variable for a condition, gives value back or a defined value

## Install

```sh
npm i -D ss-checkvar
```

## Usage

```js
import ssCheckvar from "ss-checkvar"

ssCheckvar(myVarToCheck, "return this string when empty") // true
```

## License

MIT © [Robert Agthe](http://github.com/polarity)

[npm-url]: https://npmjs.org/package/ss-checkvar
[npm-image]: https://img.shields.io/npm/v/ss-checkvar.svg?style=flat-square

[travis-url]: https://travis-ci.org/polarity/ss-checkvar
[travis-image]: https://img.shields.io/travis/polarity/ss-checkvar.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/polarity/ss-checkvar
[coveralls-image]: https://img.shields.io/coveralls/polarity/ss-checkvar.svg?style=flat-square

[depstat-url]: https://david-dm.org/polarity/ss-checkvar
[depstat-image]: https://david-dm.org/polarity/ss-checkvar.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/ss-checkvar.svg?style=flat-square
