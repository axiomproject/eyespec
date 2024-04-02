import { Link } from "react-router-dom";
import "../styles/Header.css";
import PathConstants from "../routes/pathConstants";

export default function Header() {
  return (
    <header>
      <div className="header-div">
        <h1 className="title">
          <Link to={PathConstants.HOME}>EYE SPEC</Link>
        </h1>
        <nav className="navbars ">
          <ul className="nav-list">
            <li className="nav-item">
              <Link className="nav-link" to={PathConstants.HOME}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={PathConstants.EYETEST}>
                EYETEST
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={PathConstants.FAQ}>
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={PathConstants.ABOUT}>
                ABOUT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
