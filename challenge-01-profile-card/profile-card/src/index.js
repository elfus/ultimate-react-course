import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skillList = [
  { skill: "C++", level: "advanced", color: "#2662EA" },
  { skill: "C", level: "advanced", color: "#2662EA" },
  { skill: "JavaScript", level: "beginner", color: "#FF3B00" },
  { skill: "Python", level: "intermediate", color: "#E84F33" },
  { skill: "BASH", level: "intermediate", color: "#E84F33" },
  { skill: "SQL", level: "intermediate", color: "#E84F33" },
  { skill: "PL/SQL", level: "beginner", color: "#FF3B00" },
  { skill: "Git", level: "intermediate", color: "#E84F33" },
  { skill: "Yocto", level: "intermediate", color: "#E84F33" },
];

function Avatar({ file }) {
  return <img className="avatar" src={file} alt={file} />;
}

function Intro({ name }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        Computer engineer with 13 years of experience in C++ and C.
        Collaborator, good team player with strong communication skills and
        quick learner. Disciplined, organized, always looking to work in
        engaging projects that allow me put my knowledge into practice and learn
        new technologies as well.
      </p>
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <li className="skill" style={{ backgroundColor: skillObj.color }}>
      {skillObj.skill}
      {skillObj.level === "beginner" && " 👶"}
      {skillObj.level === "intermediate" && " 👍"}
      {skillObj.level === "advanced" && " 💪"}
    </li>
  );
}

function SkillList({ skillList }) {
  return (
    <ul className="skill-list">
      {skillList.map((skill) => {
        return <Skill key={skill.skill} skillObj={skill} />;
      })}
    </ul>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar file="adrian.jpg" />
      <div className="data">
        <Intro name="Adrián Ortega" />
        {/* {Should contain one Skill component 
          for each web dev skill that you have,
          customized with props} */}
        <SkillList skillList={skillList} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
export default App;
