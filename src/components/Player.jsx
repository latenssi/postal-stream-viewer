import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
const flowplayer = window.flowplayer

const RTMP_SERVER = process.env.RTMP_SERVER
const RTMP_SERVER_RTMP_PORT = process.env.RTMP_SERVER_RTMP_PORT

class Player extends Component {
  constructor(props) {
    super(props)
    this.loading = false
    this.clip = null
    this.stillLoading = false
    this.lastTime = 0
    this.offline = false
    this.check = this.check.bind(this)
  }

  createPlayer() {
    const el = ReactDOM.findDOMNode(this.refs.container)
    const settings = {
      debug: process.env.NODE_ENV !== 'production',
      autoplay: false,
      live: true,
      embed: false,
      splash: true,
      speeds: [1],
      rtmp: {
        url: `rtmp://${RTMP_SERVER}:${RTMP_SERVER_RTMP_PORT}/player`,
        rtmpt: false,
        subscribe: false,
        bufferTime: 0
      },
      clip: this.clip
    }
    this.player = flowplayer(el, settings)

    this.player.on("load", () => this.loading = true)
    this.player.on("ready", (e, api, video) => {
      this.loading = false
      this.lastTime = video.time
      this.offline = false
    })
  }

  changeVideo(newVideo) {
    this.clip = { sources: [newVideo] }
    if (this.player) {
      this.player.load(this.clip)
    } else {
      this.createPlayer()
    }
  }

  check() {
    const { player: { video: { time = 0 }} } = this

    if (!this.offline && time > 0 && this.lastTime > 0 && time === this.lastTime) {
      this.player.unload()
      this.offline = true
    }
    this.lastTime = time

    if (this.loading && !this.stillLoading) this.stillLoading = true
    else if (this.loading && this.stillLoading) {
      this.loading = false
      this.player.unload()
      this.player.load(this.clip)
    }
    else this.stillLoading = false
  }

  componentDidMount() {
    this.timer = setInterval(this.check, 2000)

    const { video } = this.props
    if (video) {
      this.changeVideo(video)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { video: newVideo } = nextProps
    const { video: oldVideo } = this.props
    if (newVideo
        && newVideo.src
        && (!oldVideo || !oldVideo.src || newVideo.src !== oldVideo.src)) {
      this.changeVideo(newVideo)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    if (this.player) this.player.shutdown()
  }

  render() {
    return (
      <div className="player">
          <div className="player-wrap" ref="container"></div>
      </div>
    )
  }
}

Player.propTypes = {
  video: PropTypes.object.isRequired
}

export { Player }
