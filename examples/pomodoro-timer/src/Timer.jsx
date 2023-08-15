import * as React from "react";
import PropTypes from "prop-types";
import {
  useObservable,
  pluckFirst,
  useObservableState,
} from "observable-hooks";
import { Clock } from "./Clock";
import {
  map,
  filter,
  distinctUntilChanged,
  switchMap,
  repeat,
  withLatestFrom,
  scan,
  take,
} from "rxjs/operators";
import { of, animationFrameScheduler } from "rxjs";

const pomodoroSeconds = 25 * 60;

export const Timer = ({ state }) => {
  const timerState$ = useObservable(pluckFirst, [state]);
  const countDown$ = useObservable(() =>
    timerState$.pipe(
      map(state => state === "reset"),
      distinctUntilChanged(),
      switchMap(isReset =>
        isReset
          ? of(pomodoroSeconds)
          : // high accuracy timing
            // repetitively calculate the diff
            of(animationFrameScheduler.now(), animationFrameScheduler).pipe(
              repeat(),
              // extract seconds
              map(startTime => ~~((Date.now() - startTime) / 1000)),
              distinctUntilChanged(),
              // pause implementation
              withLatestFrom(timerState$),
              filter(([, state]) => state === "started"),
              // time's up!
              take(pomodoroSeconds),
              // count how many second left
              scan(timeLeft => timeLeft - 1, pomodoroSeconds)
            )
      )
    )
  );
  const seconds = useObservableState(countDown$, pomodoroSeconds);
  return <Clock seconds={seconds} />;
};

Timer.propTypes = {
  state: PropTypes.oneOf(["started", "paused", "reset"]),
};
