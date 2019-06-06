import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Root from './routes'
import * as serviceWorker from './serviceWorker'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCheckSquare, faUserCircle} from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faUserCircle)

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
