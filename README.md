[![Build Status](https://travis-ci.org/JuanMaRuiz/ccc-util.svg?branch=master)](https://travis-ci.org/JuanMaRuiz/ccc-util)
[![Coverage Status](https://coveralls.io/repos/github/JuanMaRuiz/ccc-util/badge.svg?branch=master)](https://coveralls.io/github/JuanMaRuiz/ccc-util?branch=master)
[![Coverage Status](https://img.shields.io/npm/v/ccc-util)](https://img.shields.io/npm/v/ccc-util)

# CCC Util

This module provides a `validate` method to check if a given CCC is valid or not. 

| Option | Type | Required | Description |
|-------------|-----------|----------|----------|
| ccc | `String` | `true` |  |
| options | `Object` | `false` | Option available: `institution`|


**Note**

Due the different logic to validate a bank account depending on the Country. This validator is only valid for **Spain** bank accounts. If you are interested in this validator and you want to add a new country, you can:

* **Open an issue like this:**

> Title: Add support for new Country
> 
> * **Country**: _New country_
> * **Validation**: _Link to info about how to validade the account_
> * **List with entinty codes for banks**: _Link or file which contains a list with all the banks and entity codes_

* **Open a Pull request** adding your own validation.

## Install

```bash
npm i ccc-util --save-dev
```

## Usage

### Passing only a CCC

Use this if you are interested in validate only the account number.

```bash
const { validate } = require('ccc-util');

validate('0144 9181 1115 8790 3375'); //=> true
validate('0144-9181-1115-8790-3375'); //=> true
validate('  0144 -9181-1115-8790-3375'); //=> true

validate('0137081073'); //=> false

validate('0049-1500-05-1234567890'); //=> false
```

### Passing CCC and institution name

Optionally you can pass a second argument to `validate` method, the `institution`. If passed `ccc-util` will validate the account number with the institution name. If both are valid the result will be `true`, `false` otherwise. 

```bash
const { validate } = require('ccc-util');

validate('0144 9181 1115 8790 3375', { institution: 'BNP Paribas Securities Services, S.E.') //=> true
validate('0144 9181 1115 8790 3375', { institution: 'BNP Paribas Securities Services') //=> false
```

### Codes of banking entities in Spain

Passing `institution: 'Name of Institution'` to `ccc-util` will validate the bank account number and the entity number (first four numbers of CCC).

In the list below you will find some of the codes of monetary financial institutions of Spain. You can find all of them in **[Banco de España official's page](https://www.bde.es/webbde/es/estadis/ifm/if_es.html)**

| Entity Code | Bank Name |
|-------------|-----------|
| ES0049 | Banco Santander, S.A.|
| ES2038 | Bankia, S.A.|
| ES8832 | Bankinter Consumer Finance, E.F.C., S.A.|
| ES0128 | Bankinter, S.A.|
| ES2100 | CaixaBank, S.A.|
| ES1465 | ING Bank, N.V. S.E|
| ES2095 | Kutxabank, S.A.|
| ES2048 | Liberbank, S.A.|
| ES0073 | Open Bank, S.A.|

### Available validators

* Spain account validator.
* NZ account validator

### Reference

* [How to validate an Spanish CCC](https://es.wikipedia.org/wiki/Código_cuenta_cliente#D%C3%ADgitos_de_control)
