import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MoodComponent from "./component/mood/MoodComponent";

function App() {
  return (
      <div className="container">
          <Router>
              <div>
              <header>
                  <div class="header-root">
                      <div class="rubric" id="rubric">
                          <a class="link" href="https://www.theatlantic.com/health/"
                              data-action="click link - section rubric"
                              data-label="https://www.theatlantic.com/health/">
                          Health</a>
                      </div>
                      <h1 class="root">The Pandemic Has Made us isolated, but</h1>
                      <div class="root">
                          <p class="hed">You Are Not Alone.</p>
                      </div>
                  </div>
              </header>
              <Switch>
                  <Route path="/" exact component={MoodComponent} />
              </Switch>
              </div>
          </Router>
      </div>
  );
}

export default App;
