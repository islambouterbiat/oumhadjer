import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ModelsScreen from "./screens/ModelsScreen";
import HomeScreen from "./screens/HomeScreen";
import NotFound from "./components/NotFound";
import ModelScreen from "./screens/ModelScreen";

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <main className="py-3">
          <Container>
            <Switch>
              <Route path="/home" component={HomeScreen} />
              <Route path="/:category/:id" component={ModelScreen} />
              <Route
                path="/babies"
                component={() => <ModelsScreen category="babies" />}
              />
              <Route
                path="/sheets"
                component={() => <ModelsScreen category="sheets" />}
              />
              <Route
                path="/fullset"
                component={() => <ModelsScreen category="fullset" />}
              />
              <Route path="/not-found" component={NotFound}></Route>
              <Redirect from="/" exact to="/home" />
              <Redirect to="/not-found" />
            </Switch>
          </Container>
        </main>
        <Footer />
      </>
    </Router>
  );
};

export default App;
