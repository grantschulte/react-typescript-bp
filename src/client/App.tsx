import React from 'react'

import './Styles/Vars.css'
import './Styles/Global.css'
import css from './App.css'
import cssGlobal from './Styles/Global.css'
import cssTrans from './Styles/Transitions.css'

import { cssString, cssStringFromArray } from './utils/css.utils'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {

  }

  render () {
    const cssArr: string[] = [
      css.wrapper
    ]
    const cssClasses: string = cssStringFromArray(cssArr)

    return (
      <div
        id="app-wrapper"
        className={cssClasses}>
      </div>
    )
  }
}

export default App
