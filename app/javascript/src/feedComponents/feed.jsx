import React from 'react'
import ReactDOM from 'react-dom'

import './feed.scss';

const Feed = props => (
  <>
    <h1>This is Feed page</h1>
  </>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Feed />,
    document.body.appendChild(document.createElement('div')),
  )
})