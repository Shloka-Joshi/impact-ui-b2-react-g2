import { Link } from "react-router-dom";
import '../styles/sideNavStyle.css';

const SideMenuNav = (props) => {

    const menuData = props.menuData;
    return menuData.map((menu) =>
        <div className="sidebar">
            <Link to={menu.path} >{menu.title}</Link>
        </div>
    )
}

export default SideMenuNav;