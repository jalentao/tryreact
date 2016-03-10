"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { Router, Route} from 'react-router'

import ThemePage from './pages/theme'
import PlayerPage from './pages/player'
import PlayPage from './pages/play'
import WelfarePage from './pages/welfare'
import MinePage from './pages/mine'

ReactDOM.render((
    <Provider store={configureStore()}>
        <Router>
            <Route path="/" component={PlayPage}/>
            <Route path="/theme" component={ThemePage}/>
            <Route path="/player" component={PlayerPage}/>
            <Route path="/play" component={PlayPage}/>
            <Route path="/welfare" component={WelfarePage}/>
            <Route path="/mine" component={MinePage}/>
        </Router>
    </Provider>
), document.getElementById('container'))