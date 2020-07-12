import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import './scss/main.scss'

import App from './App'

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
