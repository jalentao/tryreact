/**
 * Created by jf on 15/12/10.
 */

"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route} from 'react-router'

import Theme from 'pages/theme'
import Player from 'pages/player'
import Welfare from './pages/welfare'
import Mine from './pages/mine'
import Play from './pages/play'
ReactDOM.render((
    <Router>
        <Route path="/" component={play}/>
        <Route path="/player" component={Player}/>
        <Route path="/welfare" component={Welfare}/>
        <Route path="/mine" component={Mine}/>
    </Router>
), document.getElementById('container'));
