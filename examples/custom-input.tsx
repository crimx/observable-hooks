import * as React from 'react'
import { pluck } from 'rxjs/operators'
import {
  useObservableCallback,
  useSubscription,
  useObservablePropsCallback
} from '../src'

export interface InputProps {
  text: string
  onChange: (text: string) => any
}

export const CustomInput: React.FC<InputProps> = props => {
  const [onChange, textChange$] = useObservableCallback<
    string,
    React.FormEvent<HTMLInputElement>
  >(events$ => events$.pipe(pluck('currentTarget', 'value')))

  useObservablePropsCallback(textChange$, props.onChange)

  useSubscription(textChange$, console.log)

  return (
    <input
      className="input"
      type="text"
      placeholder="Text input"
      value={props.text}
      onChange={onChange}
    />
  )
}
