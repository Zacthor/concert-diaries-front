import * as React from "react"
import { render } from "react-dom"
import Home from "./components/Home"
import Test from "./components/Test"

const rootEl = document.getElementById("root")
import { BrowserRouter, Route, Switch } from 'react-router-dom'

render(
  (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/test" render={() => <Test />} />
      </Switch>
    </BrowserRouter>
  ),
  rootEl,
)
