# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.0.5](https://github.com/crimx/observable-hooks/compare/v4.0.4...v4.0.5) (2021-06-12)

**Note:** Version bump only for package observable-hooks





## [4.0.4](https://github.com/crimx/observable-hooks/compare/v4.0.3...v4.0.4) (2021-06-11)

**Note:** Version bump only for package observable-hooks





## [4.0.3](https://github.com/crimx/observable-hooks/compare/v4.0.2...v4.0.3) (2021-03-08)

**Note:** Version bump only for package observable-hooks





## [4.0.2](https://github.com/crimx/observable-hooks/compare/v4.0.1...v4.0.2) (2021-03-06)

**Note:** Version bump only for package observable-hooks





## [4.0.1](https://github.com/crimx/observable-hooks/compare/v4.0.0...v4.0.1) (2021-02-28)

**Note:** Version bump only for package observable-hooks





# [3.2.0](https://github.com/crimx/observable-hooks/compare/v3.1.2...v3.2.0) (2021-02-26)


### Bug Fixes

* typo in observable-state jsdoc ([#35](https://github.com/crimx/observable-hooks/issues/35)) ([312161a](https://github.com/crimx/observable-hooks/commit/312161ac3eb1f42c5a0ec2fefcfef86b993786ca))


### Features

* allow `PartialObserver` ([#38](https://github.com/crimx/observable-hooks/issues/38)) ([6c657ca](https://github.com/crimx/observable-hooks/commit/6c657ca704d86f4741bb8790184be31222fda3c6))





## [3.1.2](https://github.com/crimx/observable-hooks/compare/v3.1.1...v3.1.2) (2020-08-22)


### Bug Fixes

* move side-effects to effect hooks ([308f4be](https://github.com/crimx/observable-hooks/commit/308f4befed700e168e44778813bfe25c6a8de8ab))





## [3.1.1](https://github.com/crimx/observable-hooks/compare/v3.1.0...v3.1.1) (2020-08-22)


### Bug Fixes

* truly fix [#17](https://github.com/crimx/observable-hooks/issues/17) ([56a83c5](https://github.com/crimx/observable-hooks/commit/56a83c5d26ad7e459b8ac2f90ff76424b5785659))





# [3.1.0](https://github.com/crimx/observable-hooks/compare/v3.0.0...v3.1.0) (2020-08-07)


### Features

* add useObservableEagerState ([5152a15](https://github.com/crimx/observable-hooks/commit/5152a1546c0bba18f4ec2df30266f1cf037a0b8a))





# [3.0.0](https://github.com/crimx/observable-hooks/compare/v3.0.0-alpha.1...v3.0.0) (2020-06-17)

**Note:** Version bump only for package observable-hooks





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

**Note:** Version bump only for package observable-hooks





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
