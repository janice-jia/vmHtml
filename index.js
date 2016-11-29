import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './app/routes'

import './app/stylesheets/app.scss'

render(
    <Router routes={routes} history={browserHistory}/>,
    document.getElementById('app')
)
