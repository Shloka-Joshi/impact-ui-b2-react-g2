import {
  BrowserRouter as Router,
//   Switch,
//   Route,
  Link,
//   Router
} from "react-router-dom";
import '../styles/sideNavStyle.css';

const SideMenuNav = (props) => {

    const menuData = props.menuData;
    console.log(props);
    return menuData.map((menu) => <Router>
        <div className="sidebar">
            <Link to={menu.path}>{menu.title}</Link>
        </div>
        </Router>)
}

export default SideMenuNav;