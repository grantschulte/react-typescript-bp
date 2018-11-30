import React from 'react'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import VideoSelectionForm from './Components/VideoSelectionForm/VideoSelectionForm'

import './Styles/Vars.css'
import './Styles/Global.css'
import css from './App.css'
import cssGlobal from './Styles/Global.css'
import cssTrans from './Styles/Transitions.css'

import { cssString, cssStringFromArray } from './utils/css.utils'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      videoId: undefined,
      video: undefined,
      channel: undefined,
      loading: true
    }
  }

  componentDidMount () {

  }

  fetchDeviceId () {

  }

  fetchUser () {

  }

  fetchVideo () {

  }

  submitVideoForm (e) {


    const form = e.target

    console.log(form.videoId.value)
    console.log(form.channel.value)

    this.setState({
      loading: false
    })

    event.preventDefault()
  }

  setVideoId (videoId) {
    this.setState({ videoId })
  }

  setVideo (video) {
    this.setState({ video })
  }

  setChannel (channel) {
    this.setState({ channel })
  }

  render () {
    const { video, channel, loading } = this.state
    const cssArr: string[] = [
      css.wrapper
    ]
    const cssClasses: string = cssStringFromArray(cssArr)

    const player = (
      <VideoPlayer video={video} />
    )

    const loader = (
      <div className={css.loaderWrapper}>Loading...</div>
    )

    return (
      <div
        id="app-wrapper"
        className={cssClasses}>
        <VideoSelectionForm
          submitVideoForm={this.submitVideoForm.bind(this)} />
        { !loading && player }
        { loading && loader }
      </div>
    )
  }
}

export default App
