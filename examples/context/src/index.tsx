import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { NormalValueExample, NormalValueDescendant } from './NormalValue'
import {
  ObservableValueExample,
  ObservableValueDescendant
} from './ObservableValue'

import 'bulma/css/bulma.min.css'

const App: FC = () => {
  return (
    <div className="columns">
      <div className="column">
        <NormalValueExample>
          <NormalValueDescendant />
        </NormalValueExample>
      </div>
      <div className="column">
        <ObservableValueExample>
          <ObservableValueDescendant />
        </ObservableValueExample>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
