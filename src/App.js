import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import NavMenu from "./components/NavMenu";
import ScrollToTop from "./components/SmoothScrollBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/projects" exact>
              <Projects />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </>
  );
}
