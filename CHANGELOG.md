# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.1.1](https://github.com/crimx/observable-hooks/compare/v2.1.0...v2.1.1) (2019-09-01)



## [2.1.0](https://github.com/crimx/observable-hooks/compare/v2.0.2...v2.1.0) (2019-08-31)


### Build System

* target esnext ([19f132b](https://github.com/crimx/observable-hooks/commit/19f132b))


### Features

* add selector for useObservableCallback ([af30f0c](https://github.com/crimx/observable-hooks/commit/af30f0c))



### [2.0.2](https://github.com/crimx/observable-hooks/compare/v2.0.1...v2.0.2) (2019-08-23)



### [2.0.1](https://github.com/crimx/observable-hooks/compare/v2.0.0...v2.0.1) (2019-08-21)



## [2.0.0](https://github.com/crimx/observable-hooks/compare/v1.0.5...v2.0.0) (2019-08-21)


### refactor

* let use-subscription support closure accessing ([dd06f9e](https://github.com/crimx/observable-hooks/commit/dd06f9e))


### BREAKING CHANGES

* useSubscription supports only one way to pass subscribe arguments for simplicity. |useSubscription used to ignore changes of the subscribe functions, now it will always call the latest one.



### [1.0.5](https://github.com/crimx/observable-hooks/compare/v1.0.4...v1.0.5) (2019-08-18)


### Bug Fixes

* for types use Readonly instead of readonly ([232d8c7](https://github.com/crimx/observable-hooks/commit/232d8c7))



### [1.0.4](https://github.com/crimx/observable-hooks/compare/v1.0.3...v1.0.4) (2019-08-18)



### [1.0.3](https://github.com/crimx/observable-hooks/compare/v1.0.2...v1.0.3) (2019-08-11)



### [1.0.2](https://github.com/crimx/observable-hooks/compare/v1.0.1...v1.0.2) (2019-08-03)



### [1.0.1](https://github.com/crimx/observable-hooks/compare/v1.0.0...v1.0.1) (2019-07-21)


### Build System

* only include src ([8f87c1b](https://github.com/crimx/observable-hooks/commit/8f87c1b))



## 1.0.0 (2019-07-21)


### Bug Fixes

* first state by setState being ignored ([29e8e12](https://github.com/crimx/observable-hooks/commit/29e8e12))
* generate typings ([2527554](https://github.com/crimx/observable-hooks/commit/2527554))
* init state losing ([d615627](https://github.com/crimx/observable-hooks/commit/d615627))
* wording ([228a064](https://github.com/crimx/observable-hooks/commit/228a064))


### Build System

* init ([2fd9e9d](https://github.com/crimx/observable-hooks/commit/2fd9e9d))


### Features

* add helpers ([72c63a5](https://github.com/crimx/observable-hooks/commit/72c63a5))
* add useObservable ([ec294d8](https://github.com/crimx/observable-hooks/commit/ec294d8))
* export useRefFn ([30082a0](https://github.com/crimx/observable-hooks/commit/30082a0))
* finish first draft ([15198a3](https://github.com/crimx/observable-hooks/commit/15198a3))
* support passing Observable directly ([a470aac](https://github.com/crimx/observable-hooks/commit/a470aac))


### Tests

* add coveralls ([b42d36f](https://github.com/crimx/observable-hooks/commit/b42d36f))
* add jest testing ([d3fabe8](https://github.com/crimx/observable-hooks/commit/d3fabe8))
