import { createContext } from "react";
import { EMPTY, Observable } from "rxjs";

export const NormalValueContext = createContext(10);

export const ObservableValueContext = createContext<Observable<number>>(EMPTY);
