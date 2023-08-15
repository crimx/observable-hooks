/* eslint-disable camelcase */

// React internal mocking
export type Scheduler = typeof import("scheduler") & {
  unstable_IdlePriority: number;
  unstable_ImmediatePriority: number;
  unstable_LowPriority: number;
  unstable_NormalPriority: number;
  unstable_Profiling: {
    startLoggingProfilingEvents: () => void;
    stopLoggingProfilingEvents: () => any;
    sharedProfilingBuffer: ArrayBuffer;
  };
  unstable_UserBlockingPriority: number;
  unstable_advanceTime: (ms: any) => void;
  unstable_cancelCallback: (task: any) => void;
  unstable_clearYields: () => any;
  unstable_continueExecution: () => void;
  unstable_flushAll: () => void;
  unstable_flushAllWithoutAsserting: () => boolean;
  unstable_flushExpired: () => void;
  unstable_flushNumberOfYields: (count: any) => void;
  unstable_flushUntilNextPaint: () => void;
  unstable_forceFrameRate: () => void;
  unstable_getCurrentPriorityLevel: () => number;
  unstable_getFirstCallbackNode: () => any;
  unstable_next: (eventHandler: any) => any;
  unstable_now: () => number;
  unstable_pauseExecution: () => void;
  unstable_requestPaint: () => void;
  unstable_runWithPriority: (priorityLevel: any, eventHandler: any) => any;
  unstable_scheduleCallback: (
    priorityLevel: any,
    callback: any,
    options: any
  ) => {
    id: number;
    callback: any;
    priorityLevel: any;
    startTime: number;
    expirationTime: any;
    sortIndex: number;
  };
  unstable_shouldYield: () => boolean;
  unstable_wrapCallback: (callback: any) => (...args: any[]) => any;
  unstable_yieldValue: (value: any) => void;
};

export async function mockConsoleError(
  callback: (
    consoleError: jest.MockInstance<void, Parameters<typeof console.error>>
  ) => any
): Promise<void> {
  const consoleError = jest
    .spyOn(console, "error")
    .mockImplementation(() => {});
  await callback(consoleError);
  consoleError.mockRestore();
}
