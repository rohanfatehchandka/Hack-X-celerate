import { SOCIALS, TOP_SECTION } from "../../Module/General";
import MytypedComponent from "../Typed/index.js";
import "./style.css";

const Btn = (props) => {
  return (
    <button className={props.class}>
      <i className={props.ico}></i>
      {props.type}
      <div className="overlay">
        <div className="overlay-text">{props.overlay}</div>
      </div>
    </button>
  );
};

const About = () => {
  return (
    <div className="AboutMe">
      <h2>{TOP_SECTION.TITLE}</h2>
      <MytypedComponent />
    </div>
  );
};

const Myinfo = () => {
  return (
    <div className="Myinfo">
      <About />
      <p> {TOP_SECTION.SHORT_DESCRIPTION}</p>
      <div className="venue_card" style={{ marginTop: "20px" }}>
        <div className="icon">
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <div>Veermata Jijabai Technological Institute,VJTI</div>
      </div>

      <div className="buttom-group" style={{ marginTop: "20px" }}>
        <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
          {" "}
          <Btn
            class="sponsor_btn"
            type="Register "
            overlay="Hackers registration"
          />
        </a>
      </div>
    </div>
  );
};

export { Btn, Myinfo };
