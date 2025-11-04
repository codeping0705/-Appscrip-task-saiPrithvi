import "./index.css";
import { FiMenu } from "react-icons/fi";

const navItem = [
  { id: 1, name: "SHOP" },
  { id: 2, name: "SKILLS" },
  { id: 3, name: "STORIES" },
  { id: 4, name: "ABOUT" },
  { id: 5, name: "CONTACT US" },
];

export default function Header({ children }) {
  return (
    <div className="header-container">
      <ul className="website-logo-container-sm">
        <li className="nav-items-sm-container">
          <FiMenu className="fi-menu-sm" />
          <img
            className="website-logo-sm"
            src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761918524/Logo_anzpbp.png"
            alt="website logo"
          />
        </li>
        <li className="nav-items-sm-container">
          <h1 className="logo-head">LOGO</h1>
        </li>
        <li className="nav-icons-container-sm">
          <img
            src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761919898/search-normal_jelkiq.png"
            alt="search-normal"
          />
          <img
            src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761919889/heart_h9gzeq.png"
            alt="heart-icon"
          />
          <img
            src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761919879/shopping-bag_unjnxj.png"
            alt="bag-icon"
          />
        </li>
      </ul>
      <div className="website-logo-container">
        <img
          className="website-logo"
          src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761918524/Logo_anzpbp.png"
          alt="website logo"
        />
        <h1 className="logo-head">LOGO</h1>
        <ul className="nav-icons-container">
          <img
            src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761919898/search-normal_jelkiq.png"
            alt="search-normal"
          />
          <img
            src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761919889/heart_h9gzeq.png"
            alt="heart-icon"
          />
          <img
            src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761919879/shopping-bag_unjnxj.png"
            alt="bag-icon"
          />
          <img
            src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761919866/profile_wkcold.png"
            alt="profile-logo"
          />
          <img
            src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761919857/Language_t4lczu.png"
            alt="language-icon"
          />
        </ul>
      </div>
      <div className="nav-tab-items-container">
        <ul className="nav-tab-items-list-container">
          {navItem.map((eachNav) => (
            <li key={eachNav.id}>
              <h1 className="nav-tab-item">{eachNav.name}</h1>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
