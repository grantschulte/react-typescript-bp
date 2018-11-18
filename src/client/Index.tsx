import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

declare const ENV: string
const envMessage: string = `Client running in ${ENV} mode.`
const appMountElement = document.getElementById('main')

ReactDOM.render(
  <App envMessage={envMessage} />,
  appMountElement
)
