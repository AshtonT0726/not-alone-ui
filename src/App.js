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
                          <a class="link" href="https://www.nimh.nih.gov/health/find-help/index.shtml">
                          NIH Health</a>
                          <a class="link" href="https://www.mentalhealth.gov/get-help/immediate-help">
                          Mental Health</a>
                          <a class="link" href="https://www.nami.org/help">NAMI</a>
                          <a class="link" href="https://www.betterhelp.com/advice/depression/fighting-depression-jokes-to-make-you-smile/">BetterHelp</a>
                      </div>
                  </div>
                  <div class="header-root">
                      <h1 class="root">The Pandemic Has Made us Isolated, but</h1>
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
