import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-brand">Dirty Deeds Auto Wash</div>
          <nav>
            {user && (
              <div className="nav navbar-nav ">
                <Link to="/">Home</Link>
                <Link to="/Two">Plans</Link>
                <Link to="/Three">About</Link>
                <Link to="/Four">Testimonials</Link>
                <Link to="/Five">Contact</Link>
                <Link to="/Faq">FAQ</Link>

                <span> {user.email}</span>

                <Link to="/Login">
                  <button onClick={handleClick}>Log out</button>
                </Link>
              </div>
            )}

            {!user && (
              <div>
                <Link to="/Login">Login</Link>
                <Link to="/Signup">Signup</Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
