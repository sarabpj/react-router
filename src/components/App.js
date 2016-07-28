import React, {Component} from 'react'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'

const First = () => <div>Hello World!</div>
const Second = () => <div>Hello Second! <Link to='/awesome'>See something cool</Link> </div>
const Possum = () => <div>Awesome Possum! <Link to='/' activeStyle={{ color: 'green' }}>Home</Link></div>
const NotFound = () => <div>Not a proper page </div>
const Test = () => <div>testing testing</div>
const About = () => <div>about the dev life </div>

export default class App extends Component {
    render(){
      return (
        //browserHistory gets rid of the hashes, but you need have some server side rendering that is re-enabling the react router
       // IndexRoute allows us to render a default component when no other route is present. 
        <Router history={hashHistory}>
          <Route path="/" component={First}>
            <IndexRoute component={Test}/>
            <Route path="about" component={About}/>
          </Route>
          <Route path='second' component={Second} />
          <Route path='awesome' component={Possum} />
          <Route path='*' component={NotFound} />
        </Router>
      )
    }
}