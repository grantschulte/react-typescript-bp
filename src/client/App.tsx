import React from 'react'
import './Styles/Vars.css'
import './Styles/Global.css'

import css from './App.css'
import cssGlobal from './Styles/Global.css'
import cssTrans from './Styles/Transitions.css'

import { cssString, cssStringFromArray } from './utils/css.utils'

const App = (props: any) => {
  const cssArr: string[] = [
    css.wrapper,
    css.alt,
    cssTrans.transitionDefault,
    cssGlobal.cursorPointer
  ]

  const cssClasses: string = cssStringFromArray(cssArr)

  return (
    <div
      id="app-wrapper"
      className={cssClasses}>
      <p>{props.envMessage}</p>
    </div>
  )
}

export default App
