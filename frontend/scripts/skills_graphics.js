import { getJobs, getJob } from "./job_search";
import { test } from "../../docs/test-data";
import * as d3 from "d3";
import { scaleLinear } from "d3-scale";

const testSkills = test.skills;

export const renderSkills = () => {
  clearSkillsList();

  // console.log(testSkills);
  // let skills = testSkills;

  let skills = getJob().skills;

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

const clearSkillsList = () => $("#skills-list").empty();

export const skillBubbleChart = () => {
  $("#chart").empty();

  const width = 900;
  const height = 900;

  const svg = d3
    .select("#chart")
    .append("svg")
    .attr("class", "chart-box")
    .attr("height", height)
    .attr("width", width)
    .append("g")
    .attr("transform", "translate(0,0)");

  const radiusScale = d3
    .scaleLinear()
    .domain([1, 5])
    .range([5, 60]);

  const colorScale = d3
    .scaleLinear()
    .domain([0, 7])
    .range([0.1, 0.9]);

  const simulation = d3
    .forceSimulation()
    .force("x", d3.forceX(width / 2).strength(0.05))
    .force("y", d3.forceY(height / 2).strength(0.05))
    .force(
      "collide",
      d3.forceCollide(function(d) {
        return radiusScale(d.importance);
      })
    );

  const render = datapoints => {
    let circles = svg
      .selectAll(".skill")
      .data(datapoints)
      .enter()
      .append("circle")
      .attr("class", "skill")
      .attr("r", function(d) {
        return radiusScale(d.importance);
      })
      .attr("fill", function(d) {
        return d3.interpolateRainbow(colorScale(d.level));
      });

    const ticked = () => {
      circles
        .attr("cx", function(d) {
          return d.x;
        })
        .attr("cy", function(d) {
          return d.y;
        });
    };

    simulation.nodes(datapoints).on("tick", ticked);
  };

  render(getJob().skills);
};
