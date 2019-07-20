import * as React from 'react'
import { render } from 'react-dom'
import { CustomInput } from './custom-input'
import { InputTimeAgo } from './input-time-ago'
import { Suggests } from './Suggests'
import { Warning } from './Warning'
import { wikipedia } from './api'

import 'bulma/css/bulma.min.css'

function App() {
  const [text, updateText] = React.useState('')

  return (
    <section style={{ margin: 20 }}>
      <div className="container">
        <CustomInput text={text} onChange={updateText} />
        <InputTimeAgo text={text} />
        <Suggests text={text} fetchFunc={wikipedia} />
        <Warning />
      </div>
    </section>
  )
}

const rootElement = document.createElement('div')
document.body.appendChild(rootElement)
render(<App />, rootElement)
