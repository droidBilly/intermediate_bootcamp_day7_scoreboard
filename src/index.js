// src/index.js

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'

import App from './App'
import Scoreboard from './containers/Scoreboard'
import PlayerProfile from './containers/PlayerProfile'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Scoreboard} />
        <Route path="/players/:playerId" component={PlayerProfile} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
