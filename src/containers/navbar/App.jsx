import { useEffect, useRef, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import HomePage from "../Home/HomePage";
// Import MdxContent if needed
// import { MdxContent } from "../Mdx";
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
    transition: top 0.5s;
    z-index: 100; /* Ensure the sidebar is above other elements */
    .nav-content {
      height: 100%;
      background-color: rgba(50, 13, 136);
      display: flex;
      flex-direction: column; /* Adjust for mobile view */
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
  margin-right: 50px; /* Adjust for proper spacing between headers */
  margin-bottom: 20px; /* Adjust for mobile view */
  @media (max-width: 1000px) {
    // margin-right: 10;
    margin-bottom: 0px;
    margin-top: 0px;
  }
`;

const NavImage = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;

const RightLogo = styled.img`
  width: ${(props) => props.width}; /* Adjust the size of the image */
  margin-right: 440px; /* Add some spacing between the logo and headings */
  @media (max-width: 1000px) {
    margin-right: 20px;
    margin-left: auto;
  }
`;

const RightLogo1 = styled.img`
  width: ${(props) => props.width}; /* Adjust the size of the image */
  margin-left: 5px;
  margin-right: 10px;
`;

const NAVBAR = ({}) => {
  const [toggle, setToggle] = useState(true);
  const [isOffset, setIsOffset] = useState(false);

  const navigation = useRef();

  const listenScrollEvent = () => {
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

  const handleOutsideCick = (event) => {
    if (!navigation.current.contains(event.target)) {
      setToggle(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideCick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideCick);
    };
  }, []);

  const handleLinkClick = () => {
    setToggle(true); // Close the sidebar when a link is clicked in mobile view
  };

  return (
    <Router>
      <nav className={`nav_bar ${isOffset && "nav_bar-offset-crossed"}`}>
        <Wrapper toggle={toggle}>
          <div className="nav-content" ref={navigation}>
            <ul>
              <RightLogo src={rightLogo} width="330px" alt="Right Logo" />

              <NavItem>
                <li onClick={handleLinkClick}>
                  <Link to={`#home`}>
                    <span className="links">
                      <h3>Home </h3>
                    </span>{" "}
                  </Link>
                </li>
              </NavItem>
              <NavItem>
                <li onClick={handleLinkClick}>
                  <Link to={`#about`}>
                    <span className="links">
                      <h3>About</h3>
                    </span>{" "}
                  </Link>
                </li>
              </NavItem>
              <NavItem>
                <li onClick={handleLinkClick}>
                  <Link to={`#faq`}>
                    <span className="links">
                      <h3>FAQ</h3>{" "}
                    </span>{" "}
                  </Link>
                </li>
              </NavItem>
              <NavItem>
                <li onClick={handleLinkClick}>
                  <Link to={`#prizes`}>
                    <span className="links">
                      <h3>Prizes</h3>{" "}
                    </span>{" "}
                  </Link>
                </li>
              </NavItem>
              <NavItem>
                <li onClick={handleLinkClick}>
                  <Link to={`#sponsors`}>
                    <span className="links">
                      <h3>Sponsors</h3>{" "}
                    </span>{" "}
                  </Link>
                </li>
              </NavItem>
              <NavItem>
                <li onClick={handleLinkClick}>
                  <Link to={`#team`}>
                    <span className="links">
                      <h3>Team</h3>
                    </span>{" "}
                  </Link>
                </li>
              </NavItem>
            </ul>
          </div>
          <div className="ease" />
        </Wrapper>
        <img
          className="s-open"
          onClick={() => setToggle(!toggle)} // Toggle sidebar on hamburger click
          src={hamLogo}
        />
      </nav>
      <Switch>
        {/* Uncomment below if MdxContent is used */}
        {/* <Route path="/blog" exact={true}>
          <MdxContent />
        </Route> */}
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default NAVBAR;
