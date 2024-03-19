import "./style.css";
import mix from "../../containers/Home/assets/mix.png";

import { MIDDLE_SECTION } from "../../Module/General";
import { VISION_SECTION } from "../../Module/General";

function LogoSectionAbout() {
  return (
    <div className="LogoSectionAbout">
      <h2>
        <b>{MIDDLE_SECTION.TITLE}</b>
      </h2>
      <p>{MIDDLE_SECTION.LONG_DESCRIPTION}</p>
      <h1>{VISION_SECTION.TITLE}</h1>
      <p>{VISION_SECTION.LONG_DESCRIPTION}</p>
    </div>
  );
}

function Logo() {
  return (
    <div className="logoS">
      <img className="Logo" src={mix} alt="Limbohacks" />
    </div>
  );
}

export { Logo, LogoSectionAbout };
