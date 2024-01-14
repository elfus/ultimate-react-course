import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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

function Skill({ skillName, bgColor, emoji }) {
  return (
    <li className="skill" style={{ backgroundColor: bgColor }}>
      {skillName} {emoji}
    </li>
  );
}

function SkillList({ skillList }) {
  const map = new Map([
    ["advanced", ["green", "💪"]],
    ["medium", ["orangered", "👍"]],
    ["beginner", ["orange", "👶"]],
  ]);

  return (
    <ul className="skill-list">
      {skillList.map((skill) => {
        const [name, level] = skill;
        const [color, emoji] = map.get(level);
        return (
          <Skill key={name} skillName={name} bgColor={color} emoji={emoji} />
        );
      })}
    </ul>
  );
}

function App() {
  const skillList = [
    ["C++", "advanced"],
    ["C", "advanced"],
    ["JavaScript", "beginner"],
    ["Python", "medium"],
    ["BASH", "medium"],
    ["SQL", "medium"],
    ["PL/SQL", "beginner"],
    ["Git", "medium"],
    ["Yocto", "medium"],
  ];
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
