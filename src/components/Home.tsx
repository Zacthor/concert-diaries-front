import * as React from "react"
import { hot } from "react-hot-loader"
import { Link } from 'react-router-dom'

const reactLogo = require("./../assets/img/react_logo.svg")
import "./../assets/scss/App.scss"

class App extends React.Component<{}, undefined> {
  public render() {
    return (
      <div className="app">
        <h1>Hello World! Welcome Home!</h1>
        <p>Foo to the barz</p>
        <Link to="/test"> Test the routing!</Link>
      </div>
    )
  }
}

declare let module: object

export default hot(module)(App)
