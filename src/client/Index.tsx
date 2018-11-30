import React from 'react'
import ReactDOM from 'react-dom'
import 'tachyons/css/tachyons.css'

import App from './App'
import { JW_MANIFEST } from './client.config'

declare const ENV: string
const envMessage: string = `Client running in ${ENV} mode.`
const appMountElement = document.getElementById('main')

;(function () {
  const frag = document.createDocumentFragment()
  const lastSrc: string = JW_MANIFEST[JW_MANIFEST.length - 1]

  for (let src of JW_MANIFEST) {
    const scriptEl = document.createElement('script')
    scriptEl.src = src
    scriptEl.async = false

    if (scriptEl.src.includes(lastSrc)) {
      scriptEl.addEventListener('load', function () {
        ReactDOM.render(
          <App />,
          appMountElement
        )
      })
    }

    frag.appendChild(scriptEl)
  }

  document.head.appendChild(frag)
})()
