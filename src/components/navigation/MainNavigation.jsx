import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'

export class MainNavigation extends Component {

  render() {
    const { brandName } = this.props

    return (
      <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Avaa / sulje valikko</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">{brandName}</ Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse"> </div>
        </div>
      </nav>
    )
  }
}

MainNavigation.propTypes = {
  brandName: PropTypes.string.isRequired
}
