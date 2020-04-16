import * as React from "react"
import { hot } from "react-hot-loader"
import { Link } from 'react-router-dom'

const reactLogo = require("./../assets/img/react_logo.svg")
import "./../assets/scss/App.scss"

class App extends React.Component<{}, undefined> {
  public render() {
    return (
      <div className="app">
        <Link to="/">Go home already?!</Link>
        <h1>Aye, it's a test page!</h1>
        <p>Foo to the barz</p>
        <img src={reactLogo.default} height="480" />
      </div>
    )
  }
}

declare let module: object

export default hot(module)(App)