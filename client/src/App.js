import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Learn from "./pages/Learn";
import TakeQuiz from "./pages/TakeQuiz";
import Resources from "./pages/Resources";
import Community from "./pages/Community";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    
    <Router>
      <>
       <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/learn" component={Learn} />
          <Route exact path="/quiz" component={TakeQuiz} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/community" component={Community} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
