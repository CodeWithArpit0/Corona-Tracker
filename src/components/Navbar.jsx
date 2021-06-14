// Importing React-Router-Dom
import { Switch, Route, NavLink } from "react-router-dom";
// Importing all the pages components
import Home from "./page_components/Home";
import Covid from "./page_components/Covid";
import Travelalert from "./page_components/Travelalert";
import Prevention from "./page_components/Prevention";
import Analytics from "./page_components/Analytics";
import About from "./page_components/About";

// Covid logo path
import Path from "../images/logo.png"

// Importing scroll top button
import ScrollBtn from "../components/scroll_btn";

// Navbar Module
const Navbar = () => {
  return (
    <>
    <ScrollBtn/>
    <div className="bubble-1 bubble"></div>

      <div id="navigation-bar" className="flex">
        <div id="logo-box" className="flex">
        <div id="logo-image">
          <img src={Path} alt="covid logo" id="logo" />
          </div>
          <div id="logo-heading">
            <h1 id="primary-heading">Covid-19</h1>
            <h2 id="secondry-heading">
              Tracker
            </h2>
          </div>
        </div>

        <div id="nav-bar" className="flex">
          <nav>
            <ul className="flex">
              <li>
                <NavLink exact activeClassName="active" className="nav-link"  to="/">
                  Home
                </NavLink>
              </li>
             {/* <li>
                <NavLink exact className="nav-link"  to="/travelalert">
                  Travel Alert
                </NavLink>
              </li>*/}
              <li>
                <NavLink exact className="nav-link"  to="/covid">
                  What is Covid-19?
                </NavLink>
              </li>
              <li>
                <NavLink exact className="nav-link"  to="/prevention">
                  Prevention
                </NavLink>
              </li>
              {/*<li>
                <NavLink exact className="nav-link"  to="/analytics">
                  Analytics
                </NavLink>
              </li>*/}
              {/*<li>
                <NavLink exact className="nav-link"  to="/about">
                  About
                </NavLink>
              </li>*/}
            </ul>
          </nav>
        </div>
      </div>

      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/travelalert" component={Travelalert} />
        <Route exact path="/covid" component={Covid} />
        <Route exact path="/prevention" component={Prevention} />
        <Route exact path="/analytics" component={Analytics} />
        <Route exact path="/about" component={About} />
      </Switch>
    </>
  );
};

export default Navbar;
