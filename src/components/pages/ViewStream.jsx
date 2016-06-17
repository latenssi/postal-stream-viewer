import React, { Component, PropTypes } from 'react'
import { Player } from 'components/Player'
import { SelectStream } from 'components/SelectStream'
import { StreamInfo } from 'components/StreamInfo'
import { Link } from 'react-router'

const RTMP_SERVER = process.env.RTMP_SERVER
const RTMP_SERVER_RTMP_PORT = process.env.RTMP_SERVER_RTMP_PORT

const STREAMS = [
  'latenssi',
  'latenssi2'
]

class ViewStream extends Component {
  constructor(props) {
    super(props)
    const { params: { stream = null } } = this.props
    this.state = {
      selectedVideo: stream ? {src: stream, type: 'video/flash'} : null
    }
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
              <li><strong>URL:</strong> <code>rtmp://{RTMP_SERVER}:{RTMP_SERVER_RTMP_PORT}/pub_(code)</code></li>
              <li><strong>Stream key / Play path:</strong> <code>username</code> (e.g. "mutsis")</li>
            </ul>
          </li>
        </ul>
        <p><strong>* Get the <em>(code)</em> from an admin</strong></p>
      </div>
    )
  }

  render() {
    const { selectedVideo } = this.state
    return (
      <div>
        <StreamInfo />
        <div className="stream-controls btn-group btn-group-justified"
          style={{marginBottom: "20px"}}>
          <SelectStream streams={STREAMS}/>
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
