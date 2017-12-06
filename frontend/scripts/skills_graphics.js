import { getJob, getSkills } from "./job_search";

export const listSkills = () => {
  let skills = getSkills();
  skills.forEach((skill, idx) =>
    $("#skills-list").append(
      `<li>rank #${idx + 1}</li>
      <li>skill: ${skill.skill_name}</li>
      <li>description: ${skill.description}</li>
      <li>importance: ${skill.importance}</li>
      <li>level: ${skill.level}</li>
      <br><br>`
    )
  );
};
