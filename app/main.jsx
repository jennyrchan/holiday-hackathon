'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux';
import Student from './components/Student';

// import store from './store'
// import Jokes from './components/Jokes'
// import Login from './components/Login'

// const ExampleApp = connect(
//   ({ auth }) => ({ user: auth })
// ) (
//   ({ user, children }) =>
//     <div>
//       <nav>
//       </nav>
//       {children}
//     </div>
// )

render (
    <Router history={browserHistory}>
      <Route path="/students/:studentId" component={Student} />
    </Router>,
  document.getElementById('main')
)
