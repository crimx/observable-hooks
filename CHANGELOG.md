# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.1.0](https://github.com/crimx/observable-hooks/compare/v3.0.0...v3.1.0) (2020-08-07)


### Features

* add useObservableEagerState ([5152a15](https://github.com/crimx/observable-hooks/commit/5152a1546c0bba18f4ec2df30266f1cf037a0b8a))





# [3.0.0](https://github.com/crimx/observable-hooks/compare/v3.0.0-alpha.1...v3.0.0) (2020-06-17)

**Note:** Version bump only for package observable-hooks-mono





# [3.0.0-alpha.1](https://github.com/crimx/observable-hooks/compare/v3.0.0-alpha.0...v3.0.0-alpha.1) (2020-06-16)


### Performance Improvements

* **observable-hooks:** remove rest parameters ([6a1c28f](https://github.com/crimx/observable-hooks/commit/6a1c28f0e7f09bcc9ed9fdc2377745f43898a92b))





# [3.0.0-alpha.0](https://github.com/crimx/observable-hooks/compare/v2.3.5...v3.0.0-alpha.0) (2020-06-10)


### Code Refactoring

* **observable-hooks:** add initialState to get and pick state ([63ad94e](https://github.com/crimx/observable-hooks/commit/63ad94ed4d89fa69dffe5f256acb9a3fe4053ef0))
* **observable-hooks:** concurrent mode safe useSubscription ([43f8a8c](https://github.com/crimx/observable-hooks/commit/43f8a8c43541bcfbb97728c1f48baf1be038b301))
* **observable-hooks:** move subscription to commit phase ([10db7bd](https://github.com/crimx/observable-hooks/commit/10db7bd1eb430efc036b786fb99ee3ddff6714bd))
* **observable-hooks:** remove deprecated useObservablePropsCallback ([a6395a8](https://github.com/crimx/observable-hooks/commit/a6395a8625080ffb137b0e4efca32e6556126f6f))
* **observable-hooks:** useObservableState for concurrent mode ([fa6147e](https://github.com/crimx/observable-hooks/commit/fa6147ec34efa0b7826a9081d71b06d0514d6dd5))


### Features

* **observable-hooks:** add useLayoutSubscription ([ef18bca](https://github.com/crimx/observable-hooks/commit/ef18bca61b5b0330276594577c63c4d0e0cf7885))


### BREAKING CHANGES

* **observable-hooks:** useObservableGetState and useObservablePickState has incompatible signatures.
* **observable-hooks:** useSubscription returns a ref object instead of the the RxJS Subscription
* **observable-hooks:** Deprecated useObservablePropsCallback is removed
* **observable-hooks:** 1. Sync values from observables will arrive after first rendering.
2. If `initialState` is function it will be called.
* **observable-hooks:** The subscription happens in commit phase.  This means even the Observable emits synchronous values they will arrive after the first rendering.





## [2.3.5](https://github.com/crimx/observable-hooks/compare/v2.3.4...v2.3.5) (2020-04-30)

**Note:** Version bump only for package observable-hooks-mono





## [2.3.4](https://github.com/crimx/observable-hooks/compare/v2.3.3...v2.3.4) (2020-04-08)


### Bug Fixes

* **use-subscription:** unsubscribe when Observable changes ([0e43053](https://github.com/crimx/observable-hooks/commit/0e430534a46ad4a1574ee850e3bf93140db690c7))





# [2.2.0](https://github.com/crimx/observable-hooks/compare/v2.1.5...v2.2.0) (2020-02-04)


### Bug Fixes

* trigger update on re-triggering suspense ([a2b9953](https://github.com/crimx/observable-hooks/commit/a2b9953f85dc59a1c902d2246e55f03dd95ef8f7))


### Features

* add observable suspense ([c33b483](https://github.com/crimx/observable-hooks/commit/c33b4831c64688de4582c2812dda79275c9a3eb7))


### Performance Improvements

* remove unnecessary share on Observable ([aafae9a](https://github.com/crimx/observable-hooks/commit/aafae9adb0f39c36acc2f8b47d7e35304cc55566))





# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.1.5](https://github.com/crimx/observable-hooks/compare/v2.1.4...v2.1.5) (2020-01-27)



### [2.1.4](https://github.com/crimx/observable-hooks/compare/v2.1.3...v2.1.4) (2020-01-03)



### [2.1.3](https://github.com/crimx/observable-hooks/compare/v2.1.2...v2.1.3) (2019-11-14)



### [2.1.2](https://github.com/crimx/observable-hooks/compare/v2.1.1...v2.1.2) (2019-09-07)



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
