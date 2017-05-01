import React, {PropTypes} from 'react'
import { Link } from 'react-router-dom'

export const SelectStreamer = ({ streamers }) => {
  return (
    <div className="btn-group">
      <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
        Select stream <span className="caret"></span>
      </button>
      <ul className="dropdown-menu">
        { streamers.map((s, idx) => (
          <li key={idx}>
            <Link to={`/${s}`}>{s}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

SelectStreamer.propTypes = {
  streamers: PropTypes.array.isRequired
}
