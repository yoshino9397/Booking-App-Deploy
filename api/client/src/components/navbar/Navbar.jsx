import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      dispatch({ type: "LOGOUT", payload: null });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ textDecoration: "none", color: "#E5E5E5" }}>
          <div className="navItems logos">
            <img
              src="https://live.staticflickr.com/65535/52030381501_03ca77b1a6_b.jpg"
              alt=""
              className="logo"
            />
            <h1 className="title">Tabi .com</h1>
          </div>
        </Link>
        {user ? (
          <div className="userItems">
            <FontAwesomeIcon
              icon={faRightFromBracket}
              style={{ fontSize: "25px" }}
              onClick={handleLogout}
            />
            <h3>{user.username}</h3>
          </div>
        ) : (
          <div>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <button className="navButton">Register</button>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
