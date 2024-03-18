import { useEffect, useRef, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import HomePage from "../Home/HomePage";
import { MdxContent } from "../Mdx";
import rightLogo1 from "./assets/123 (1)_prev_ui.png";
import rightLogo from "./assets/HackXcelerate Logo (3).png";
import hamLogo from "./assets/ham.svg";
import "./styles.scss";

const NAVIGATION_OFFSET = 66;

const Wrapper = styled.div`
  display: block;
  width: 40%;

  @media (max-width: 1000px) {
    margin: 0;
    display: ${(props) => (props.toggle ? "none" : "static")};
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: ${(props) => (props.toggle ? "-1000px" : "0px")};
    transition: top 1s;
    .nav-content {
      height: 35%;
      background-color: rgba(50, 13, 136);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

// const MdxContent = () => {
//   return (
//     <div
//       style={{
//         backgroundColor: 'red'
//       }}
//     >
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>

//     </div>
//   );
// };

const NavItem = styled.li`
  margin-right: 40px;
  display: inline-block;
`;

const NavImage = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;

const RightLogo = styled.img`
  width: ${(props) => props.width}; /* Adjust the size of the image */
  margin-left: 50px;
`;
const NAVBAR = ({}) => {
  const [toggle, setToggle] = useState(true);
  const [isOffset, setIsOffset] = useState(false);

  const navigation = useRef();

  const listenScrollEvent = (e) => {
    if (window.scrollY >= NAVIGATION_OFFSET) {
      setIsOffset(true);
    } else {
      setIsOffset(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const handleOutsideCick = (event, ref) => {
    if (!ref.current.contains(event.target)) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", (e) =>
      handleOutsideCick(e, navigation)
    );

    return () => {
      document.removeEventListener("mousedown", (e) =>
        handleOutsideCick(e, navigation)
      );
    };
  }, []);

  return (
    <Router>
      <nav className={`nav_bar ${isOffset && "nav_bar-offset-crossed"}`}>
        <Wrapper toggle={toggle}>
          <div className="nav-content" ref={navigation}>
            <ul>
              <NavItem>
                <li>
                  <Link to={`#home`}>
                    <span className="links">Home </span>{" "}
                  </Link>
                </li>
              </NavItem>
              <NavItem>
                <li>
                  <Link to={`#about`}>
                    <span className="links">About</span>{" "}
                  </Link>
                </li>
              </NavItem>
              <NavItem>
                <li>
                  <Link to={`#faq`}>
                    <span className="links">FAQ </span>{" "}
                  </Link>
                </li>
              </NavItem>
              <NavItem>
                <li>
                  <Link to={`#prizes`}>
                    <span className="links">Prizes </span>{" "}
                  </Link>
                </li>
              </NavItem>
              <NavItem>
                <li>
                  <Link to={`#sponsors`}>
                    <span className="links">Sponsors </span>{" "}
                  </Link>
                </li>
              </NavItem>
              <NavItem>
                <li>
                  <Link to={`#team`}>
                    <span className="links">Team </span>{" "}
                  </Link>
                </li>
              </NavItem>

              <RightLogo src={rightLogo} width="300px" alt="Right Logo" />
              <div className="links1">
                <div
                  style={{
                    marginLeft: "30px",

                    fontStyle: "italic",
                    fontSize: "15px",
                  }}
                >
                  in association with
                </div>
                <div>
                  <RightLogo
                    src={rightLogo1}
                    width="280px"
                    alt="Right Logo"
                    style={{ marginRight: "40px", marginLeft: "-20px" }}
                  />
                </div>
              </div>
            </ul>
          </div>
          <div className="ease" />
        </Wrapper>
        <img
          className="s-open"
          onClick={() => setToggle(false)}
          src={hamLogo}
        />
      </nav>
      <Switch>
        <Route path="/blog" exact={true}>
          <MdxContent />
        </Route>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default NAVBAR;
