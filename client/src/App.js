import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing"
import Learn from "./pages/Learn"
import TakeQuiz from "./pages/TakeQuiz"
import Resources from "./pages/Resources"
import NoMatch from "./pages/NoMatch";


function App() {
  return (
    
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/learn" component={Learn} />
          <Route exact path="/quiz" component={TakeQuiz} />
          <Route exact path="/resources" component={Resources} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
