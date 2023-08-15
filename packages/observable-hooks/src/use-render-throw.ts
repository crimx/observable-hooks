import { useRef } from "react";
import { Observable, NEVER } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { useForceUpdate } from "./helpers";
import { useObservable } from "./use-observable";

/**
 * Enhance an Observable by making errors catch-able to ErrorBoundary.
 *
 * It catches Observable error and re-throw it as React render error.
 *
 * @template TInput Input value within Observable.
 *
 * @param input$ Input Observable.
 * @returns Observable with the same input type
 */
export function useRenderThrow<TInput>(
  input$: Observable<TInput>
): Observable<TInput> {
  const forceUpdate = useForceUpdate();
  const errorRef = useRef<Error | null>();

  const output$ = useObservable(
    inputs$ =>
      inputs$.pipe(
        switchMap(([input$]) => {
          errorRef.current = null;
          return input$.pipe(
            catchError(error => {
              errorRef.current = error;
              forceUpdate();
              return NEVER;
            })
          );
        })
      ),
    [input$]
  );

  if (errorRef.current) {
    // Let error boundary catch the error
    throw errorRef.current;
  }

  return output$;
}
