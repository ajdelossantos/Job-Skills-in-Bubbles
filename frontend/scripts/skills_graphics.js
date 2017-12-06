import { getJobs, getJob } from "./job_search";
import { test } from "../../docs/test-data";
import * as d3 from "d3";

const testSkills = test.skills;

export const listSkills = () => {
  console.log(testSkills);

  // let skills = getSkills();
  let skills = testSkills;
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

export const skillBubbleChart = () => {
  const width = 500,
    height = 500;

  const svg = d3
    .select("#chart")
    .append("svg")
    .attr("height", height)
    .attr("width", width)
    .append("g")
    .attr("transform", "traslate(0,0)");

  render();
};
