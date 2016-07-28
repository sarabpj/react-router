import React, {Component} from 'react'
import { Router, Route, hashHistory, Link } from 'react-router'

const First = () => <div>Hello World!</div>
const Second = () => <div>Hello Second! <Link to='/awesome'>Home</Link> </div>
const NotFound = () => <div>Not a proper page </div>

export default class App extends Component {
    render(){
      return (
        <Router history={hashHistory}>
          <Route path='/' component={First} />
          <Route path='second' component={Second} />
          <Route path='*' component={NotFound} />
        </Router>
      )
    }
}