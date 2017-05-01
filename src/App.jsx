import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { MainNavigation } from 'components/navigation/MainNavigation'
import { ViewStream } from 'components/pages/ViewStream'

export const App = () => (
  <Router>
    <div>
      <MainNavigation brandName={'Streamer'}/>
      <Route exact={ true } path="/" component={ ViewStream }/>
      <Route path="/:streamerId" component={ ViewStream }/>
    </div>
  </Router>
)