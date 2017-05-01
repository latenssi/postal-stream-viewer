import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import crypto from 'crypto'
import { Player } from 'components/Player'
import { SelectStreamer } from 'components/SelectStreamer'

const RTMP_SERVER = process.env.RTMP_SERVER
const RTMP_SERVER_RTMP_PORT = process.env.RTMP_SERVER_RTMP_PORT
const RTMP_SERVER_HTTP_PORT = process.env.RTMP_SERVER_HTTP_PORT
const RTMP_SECRET = process.env.RTMP_SECRET
const STATS_TOKEN = crypto.createHash('md5').update(`stats${RTMP_SECRET}`).digest("hex")

// Requires CORS to work and it does not
const statsURL = `http://${RTMP_SERVER}:${RTMP_SERVER_HTTP_PORT}/p/${STATS_TOKEN}/stats`

class ViewStream extends Component {
  constructor(props) {
    super(props)
    const { streamerId } = this.props.match.params

    this.state = {
      streamers: null,
      selectedVideo: streamerId ? { src: streamerId, type: 'video/flash' } : null
    }
  }

  componentWillReceiveProps(nextProps) {
    const { match: { params: oldParams } } = this.props
    const { match: { params: newParams } } = nextProps

    if (!newParams || !newParams.stream) this.setState({ selectedVideo: null })
    else if (newParams.stream && (!oldParams.stream || newParams.stream !== oldParams.stream)) {
      this.setState({
        selectedVideo: {src: newParams.stream, type: 'video/flash'}
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
    const { selectedVideo = null, streamers = null } = this.state
    return (
      <div>
        { !!streamers &&
          <div className="stream-controls btn-group btn-group-justified" style={{marginBottom: "20px"}}>
            <SelectStreamer streamers={ streamers } />
            <Link className="btn btn-default" to="/" disabled={ !selectedVideo }>Close</Link>
          </div>
        }
        {!! selectedVideo && <Player video={ selectedVideo }/>}
        {! selectedVideo && this.renderInstructions()}
      </div>
    )
  }
}

ViewStream.propTypes = {
  params: PropTypes.object.isRequired
}

export { ViewStream }
