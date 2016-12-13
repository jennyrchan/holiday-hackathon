'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

// import store from './store'
import SchoolWishList from './components/schoolwishlist'
import PS from './components/PS1'


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
      <Route path="/" component={SchoolWishList} />
        <Route path="/PS1" component={PS} />
    </Router>,
  document.getElementById('main')
)
