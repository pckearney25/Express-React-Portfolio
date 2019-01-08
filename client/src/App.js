import blogs from "./assets/files/blogs";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import "./App.css";

class App extends React.Component {
  render() {
    const fullPostProps = {
      cat: "My cat is pretty!"
    };

    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} key="home" />
            <Route exact path="/about" component={About} key="about" />
            <Route
              exact
              path="/portfolio"
              component={Portfolio}
              key="portfolio"
            />
            <Route exact path="/blog" component={Blog} key="blog" />
            {blogs.map(blogPost => (
              <Route
                exact
                path={blogPost.link}
                render={routeProps => (
                  <blogPost.component {...routeProps} {...fullPostProps} />
                )}
                key={blogPost.id.toString()}
              />
            ))}
            <Route exact path="/contact" component={Contact} />
            <Route path="*" component={Home} key="nomatch" />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

//<Route
// exact
//path={blogPost.link}
//component={blogPost.component}
// key={blogPost.id.toString()}
///>
