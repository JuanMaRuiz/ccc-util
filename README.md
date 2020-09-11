[![Build Status](https://travis-ci.org/JuanMaRuiz/ccc-util.svg?branch=master)](https://travis-ci.org/JuanMaRuiz/ccc-util)
[![Coverage Status](https://coveralls.io/repos/github/JuanMaRuiz/ccc-util/badge.svg?branch=master)](https://coveralls.io/github/JuanMaRuiz/ccc-util?branch=master)

# CCC Util

This module check if a CCC is valid or not and also provide a method to generate a valid random CCC.

## Install

```bash
npm i ccc-util --save-dev
```

## Usage

```bash
const { validate, generate } = require('ccc-util');

validate('84-481-2231-3');
//=> true

validate('0137081073');
//=> true

validate('isbn: 84-481-2231-3');
//=> false

generate('13');
//=> '9780137081073'

generate('13', 'prefix');
//=> 'isbn-13: 9780137081073'

generate('10');
//=> '8448122313'
```

