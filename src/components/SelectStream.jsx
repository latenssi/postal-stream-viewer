import React, {PropTypes} from 'react'
import { Link } from 'react-router'

export const SelectStream = ({ streams }) => {
  return (
    <div className="btn-group">
      <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
        Select stream <span className="caret"></span>
      </button>
      <ul className="dropdown-menu">
        {streams.map((s, idx) => (
          <li key={idx}>
            <Link to={`/stream/${s}`}>{s}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

SelectStream.propTypes = {
  streams: PropTypes.array.isRequired
}
