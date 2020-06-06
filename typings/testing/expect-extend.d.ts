export {}

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * 1. Assert Yields is initially empty.
       * 2. Flush all tasks.
       * 3. Collect Yields and compare.
       */
      toFlushAndYield(
        expectedYields: any[]
      ): {
        pass: boolean
        message?: () => any
      }
      /**
       * 1. Assert Yields is initially empty.
       * 2. Flush tasks until `expectedYields.length` Yields are collected.
       * 3. Compare.
       */
      toFlushAndYieldThrough(
        expectedYields: any[]
      ): {
        pass: boolean
        message?: () => any
      }
      /**
       * 1. Assert Yields is initially empty.
       * 2. Flush tasks until meeting a paint request.
       * 3. Collect Yields and compare.
       */
      toFlushUntilNextPaint(
        expectedYields: any[]
      ): {
        pass: boolean
        message?: () => any
      }
      /**
       * 1. Assert Yields is initially empty.
       * 2. Flush all tasks.
       * 3. Expect empty Yield.
       */
      toFlushWithoutYielding(): {
        pass: boolean
        message?: () => any
      }
      /**
       * 1. Assert Yields is initially empty.
       * 2. Flush the next scheduled task.
       * 3. Collect Yields and compare.
       */
      toFlushExpired(
        expectedYields: any[]
      ): {
        pass: boolean
        message?: () => any
      }
      /**
       * Compare Yields.
       */
      toHaveYielded(
        expectedYields: any[]
      ): {
        pass: boolean
        message?: () => any
      }
      /**
       * 1. Assert Yields is initially empty.
       * 2. Expect exception is thrown when flushing all tasks.
       */
      toFlushAndThrow(
        ...rest: any[]
      ): {
        pass: boolean
        message?: () => any
      }
    }
  }
}
