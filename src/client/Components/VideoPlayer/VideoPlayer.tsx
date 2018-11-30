import React from 'react'
import playerConfig from './player.config'
import css from './VideoPlayer.css'

class VideoPlayer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.playerRef = React.createRef()
  }

  componentDidMount () {
    this.initVideoPlayer()
  }

  initVideoPlayer () {
    const setup = Object.assign({}, playerConfig, {
      playlist: 'https://cdn.jwplayer.com/v2/media/tkM1zvBq'
    })

    this.player = jwplayer(this.playerRef.current).setup(setup)
  }

  render () {
    return (
      <div id="video-player-container">
        <div ref={this.playerRef}></div>
      </div>
    )
  }
}

export default VideoPlayer
