# observable-hooks

[![npm-version](https://img.shields.io/npm/v/observable-hooks.svg)](https://www.npmjs.com/package/observable-hooks)
[![Build Status](https://travis-ci.org/crimx/observable-hooks.svg?branch=master)](https://travis-ci.org/crimx/observable-hooks)
[![Coverage Status](https://coveralls.io/repos/github/crimx/observable-hooks/badge.svg?branch=master)](https://coveralls.io/github/crimx/observable-hooks?branch=master)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?maxAge=2592000)](http://commitizen.github.io/cz-cli/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-brightgreen.svg?maxAge=2592000)](https://conventionalcommits.org)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

React hooks for RxJS Observables with powerful APIs.

- Seamless integration of React and RxJS.
  - Props and states to Observables?
  - Observables to props events?
  - "`setState`" with one type then state value gets different type?
  - Stream of React Components???
- Full-powered RxJS. Do what you normally do with Observables. No limitation or compromise.
- Lightweight and fast. No heavy computations.
- Fully tested.

## Installation

yarn

```bash
yarn add observable-hooks
```

npm

```bash
npm install --save observable-hooks
```

## Usage

Read the doc [here](https://www.crimx.com/observable-hooks).

Examples are in [here](https://github.com/crimx/observable-hooks/tree/master/examples). Play on CodeSandbox:

- [Typeahead Example](https://codesandbox.io/s/github/crimx/observable-hooks/tree/master/examples/typeahead)

Note that there are also some useful [utilities](https://www.crimx.com/observable-hooks/modules/_helpers_.html) for common use cases.

All available APIs can be imported from the entry.

```javascript
import { ... } from 'observable-hooks'
```

Here is how I designed the APIs.

![mindmap](https://github.com/crimx/observable-hooks/blob/master/observable-hooks.png?raw=true)
