import { createContext } from 'react'
import { Observable, empty } from 'rxjs'

export const NormalValueContext = createContext(10)

export const ObservableValueContext = createContext<Observable<number>>(empty())
