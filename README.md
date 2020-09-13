[![Build Status](https://travis-ci.org/JuanMaRuiz/ccc-util.svg?branch=master)](https://travis-ci.org/JuanMaRuiz/ccc-util)
[![Coverage Status](https://coveralls.io/repos/github/JuanMaRuiz/ccc-util/badge.svg?branch=master)](https://coveralls.io/github/JuanMaRuiz/ccc-util?branch=master)

# CCC Util

This module provide a `validate` method to check if the given CCC is valid or not. 

**Note**

Due the different logic to validate bank account depending on the Country. This validator is only valid for **Spain** bank accounts. If you are interested in this validator and you want to add a new country, you can:

* **Open an issue like this:**

```
Title: Add support for new Country

* **Country**: _New country_
* **Validation**: _Link to info about how to validade the account_
```

* **Open a Pull request** adding your own validation.

## Install

```bash
npm i ccc-util --save-dev
```

## Usage

```bash
const { validate } = require('ccc-util');

validate('14650100971716610913'); //=> true
validate('14650100-97-1716610913'); //=> true
validate('14650100 97 1716610913'); //=> true

validate('0137081073'); //=> false

validate('0049-1500-05-1234567890'); //=> false
```

### Reference

* [How to validate an Spanish CCC](https://es.wikipedia.org/wiki/Código_cuenta_cliente#D%C3%ADgitos_de_control)
