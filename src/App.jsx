import React, { Component, PropTypes } from 'react'
import { Router, Route, IndexRoute, browserHistory as history } from 'react-router'
import { MainNavigation } from 'components/navigation'
import { Home, ViewStream } from 'components/pages'

require('configs/onesignal.config.js')
require('file?name=[name].[ext]!manifest.json')
require('file?name=[name].[ext]!vendor/onesignal/OneSignalSDKUpdaterWorker.js')
require('file?name=[name].[ext]!vendor/onesignal/OneSignalSDKWorker.js')

const Container = (props) => (
  <div>
    <MainNavigation brandName={'Postal'}/>
    <div className="container-fluid">{props.children}</div>
  </div>
)

Container.propTypes = {
  children: PropTypes.node
}

export class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home}/>
          <Route path='stream'>
            <IndexRoute component={ViewStream}/>
            <Route path=':stream' component={ViewStream}/>
          </Route>
        </Route>
      </Router>
    )
  }
}
