import { FC, useContext, useState, useEffect, PropsWithChildren } from "react";
import { useObservable, useObservableEagerState } from "observable-hooks";
import { scan, take } from "rxjs/operators";
import { NormalValueContext } from "./contexts";

export const NormalValueExample: FC<PropsWithChildren> = ({ children }) => {
  const [num, setNum] = useState(1);

  useEffect(() => {
    const ticket = setInterval(() => {
      setNum(num => (num + 1) % 1000000);
    }, 1000);
    return () => clearInterval(ticket);
  }, []);

  return (
    <NormalValueContext.Provider value={num}>
      {children}
    </NormalValueContext.Provider>
  );
};

export const NormalValueDescendant = () => {
  const numList = useObservableEagerState(
    useObservable(
      inputs$ =>
        inputs$.pipe(
          scan((acc, inputs) => [...acc, ...inputs], [] as number[]),
          take(10)
        ),
      [useContext(NormalValueContext)]
    )
  );

  return (
    <div className="panel">
      <p className="panel-heading">Normal Value as Context</p>
      {numList.map((num, i) => (
        <span className="panel-block" key={num + i}>
          item {num}
        </span>
      ))}
    </div>
  );
};
