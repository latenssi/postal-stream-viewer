import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import axios from 'axios'

import { pusher } from 'configs/pusher'
import { Player } from 'components/Player'
import { SelectStream } from 'components/SelectStream'

const STREAM_CHANNEL = 'stream_publish'
const STREAMERS_ENDPOINT = process.env.STREAMERS_ENDPOINT
const RTMP_SERVER = process.env.RTMP_SERVER
const RTMP_SERVER_RTMP_PORT = process.env.RTMP_SERVER_RTMP_PORT

class ViewStream extends Component {
  constructor(props) {
    super(props)
    const { params: { stream = null } } = this.props
    this.state = {
      streamers: [],
      selectedVideo: stream ? {src: stream, type: 'video/flash'} : null
    }
  }

  componentDidMount() {
    axios.get(STREAMERS_ENDPOINT)
      .then(response => response.data.data)
      .then(streamers => this.setState({
        streamers: streamers.map(s => s.name)
      }))

    this.streamChannel = pusher.subscribe(STREAM_CHANNEL)
    this.streamChannel.bind('publish', streamer => this.setState({
      streamers: [
        ...this.state.streamers.filter(s => s !== streamer.name),
        streamer.name
      ]
    }))
    this.streamChannel.bind('publish_done', streamer => this.setState({
      streamers: this.state.streamers.filter(s => s !== streamer.name)
    }))
  }

  componentWillUnmount() {
    pusher.unsubscribe(STREAM_CHANNEL)
  }

  componentWillReceiveProps(nextProps) {
    const { params: { stream: newStreamName = null } } = nextProps
    const { params: { stream: oldStreamName } } = this.props
    if (!newStreamName) this.setState({selectedVideo: null})
    else if (newStreamName && newStreamName !== oldStreamName) {
      this.setState({
        selectedVideo: {src: newStreamName, type: 'video/flash'}
      })
    }
  }

  renderInstructions() {
    return (
      <div className="well well-lg">
        <h4>Open Broadcaster settings:</h4>
        <ul>
          <li>
            <h5>Settings > Broadcast Settings / Stream</h5>
            <ul>
              <li><strong>Stream type:</strong> <code>Custom streaming server</code></li>
              <li><strong>URL:</strong> <code>rtmp://{RTMP_SERVER}/pub_(code)</code></li>
              <li><strong>Stream key / Play path:</strong> <code>username</code> (e.g. "mutsis")</li>
            </ul>
          </li>
        </ul>
        <p><strong>* Get the <em>(code)</em> from an admin</strong></p>
      </div>
    )
  }

  render() {
    const { selectedVideo, streamers } = this.state
    return (
      <div>
        <div className="stream-controls btn-group btn-group-justified"
          style={{marginBottom: "20px"}}>
          <SelectStream streams={streamers}/>
          <Link className="btn btn-default" to="/stream" disabled={!selectedVideo}>Close</Link>
        </div>
        {!! selectedVideo && <Player video={selectedVideo}/>}
        {! selectedVideo && this.renderInstructions()}
      </div>
    )
  }
}

ViewStream.propTypes = {
  params: PropTypes.object.isRequired
}

export { ViewStream }
