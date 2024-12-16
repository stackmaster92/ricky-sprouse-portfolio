import LinearBar from "./LinearBar";
import { SKILL_LIST } from "../../../constants/constants";
import { MAIN_SKILL_LIST } from "../../../constants/constants";

const Skills = (props) => {
  return (
    <div className="flex flex-col space-y-1 pt-6">
      <div className="flex flex-col gap-y-4">
        <span className="text-Snow text-xl font-bold bg-gradient-to-bl">
          {props.type === "main"
            ? "Skill Proficiency Overview"
            : "Technical Skills Proficiency"}
        </span>
        <div className="flex flex-col space-y-4">
          {props.type === "main"
            ? MAIN_SKILL_LIST.map((skill, index) => {
                return (
                  <LinearBar
                    key={index}
                    title={skill.title}
                    percent={skill.level}
                    bgColor="bg-Green"
                  />
                );
              })
            : SKILL_LIST.map((skill, index) => {
                return (
                  <LinearBar
                    key={index}
                    title={skill.title}
                    percent={skill.level}
                    bgColor="bg-Green"
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
