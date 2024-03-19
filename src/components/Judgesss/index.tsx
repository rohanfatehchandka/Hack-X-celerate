import React from "react";
import { Btn } from "../Landing/index.jsx";
import "./style.css";

interface IJoinTeam {
  placeholder: string;
  formLink: string;
  content: string;
}

const JoinTeam: React.FC<IJoinTeam> = ({ placeholder, formLink, content }) => {
  return (
    <div className="joinT">
      <h3>{content} </h3>
      <a href={formLink}>
        <Btn type={placeholder} overlay="Fill the form" link={formLink} />
      </a>
    </div>
  );
};

const Judge = ({ info }: { info: any }) => {
  const { name, role, driveLink } = info;
  return (
    <div className="member1">
      <div className="card1">
        <h3>{name}</h3>
        <button className="drive-button">
          <a href={driveLink} target="_blank" rel="noopener noreferrer">
            Download PS
          </a>
        </button>
      </div>
    </div>
  );
};

export { Judge, JoinTeam };
