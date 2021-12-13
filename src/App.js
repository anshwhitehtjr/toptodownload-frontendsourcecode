import Navbar from "./Components/AppComponents/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Components/Pages/Home";

function App () {

  const pages = [
    {
      title: 'Home',
      href: '/',
      sno: 1
    },
    {
      title: 'About',
      href: '/about',
      sno: 2
    }
  ];

  return (
    <>
      <Router>
        <Navbar title='Up To Download' mode='dark' anchors={ pages } />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <h1>Hello, World! About</h1>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
