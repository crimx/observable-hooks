import {
  useObservableCallback,
  useSubscription,
  useObservablePropsCallback,
  pluckCurrentTargetValue
} from 'observable-hooks'
import * as React from 'react'

export interface InputProps {
  text: string
  onChange: (text: string) => any
}

export const CustomInput: React.FC<InputProps> = props => {
  const [onChange, textChange$] = useObservableCallback<
    string,
    React.FormEvent<HTMLInputElement>
  >(pluckCurrentTargetValue)

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
