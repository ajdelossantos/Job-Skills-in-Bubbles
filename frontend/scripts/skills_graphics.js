// Special Thanks to Curran Kelleher, Jonathan Soma, and Mike Bostock for their D3 tutorials
// Much of the D3 code is skeleton from their instructional work

import { getJob } from "./job_search";
import { test } from "../../docs/test-data";
import * as d3 from "d3";
import d3Drag from "d3-drag";
import { scaleLinear } from "d3-scale";

const testSkills = test.skills;

export const renderSkills = () => {
  clearSkillsList();

  let jobTitle = getJob().job_title;
  console.log("jobTitle");

  $("#title").append(`<h2>${jobTitle}</h2>`);

  let skills = getJob().skills;

  skills.forEach((skill, idx) =>
    $("#skills-list").append(
      `
        <div class="skills-list-box">
          <li id="li-${skill.skill_uuid}" class="skills-li">
            <ul class="skills-details">
              <div class="skill-flex-1">
                <li>rank #${idx + 1}</li>
                <li>${skill.skill_name}</li>
              </div>
              <div class="skill-flex-2">
                <li>${skill.description}</li>
              </div>
              <div class="skills-scores skill-flex-3">
                <div class="skills-imp">
                  <li>importance</li>
                  <li>${skill.importance}</li>
                </div>
                <div class="skills-lvl">
                  <li>level</li>
                  <li>${skill.level}</li>
                </div>
              </div>
            </ul>
          </li>
        </div>
      `
    )
  );
};

const clearSkillsList = () => $("#skills-list").empty();

export const skillBubbleChart = () => {
  $("#chart").empty();

  const chart = document.querySelector("#chart");
  const width = 600;
  const height = 600;

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
    .range([3, 42]);

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

  const tooltip = d3
    .select("#graphic-group")
    .append("div")
    .attr("class", "skill-tooltip");

  const render = datapoints => {
    let circles = svg
      .selectAll(".skill")
      .data(datapoints)
      .enter()
      .append("circle")
      .attr("class", "skill-circle")
      .attr("id", d => d.skill_uuid)
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

  let circles = document.querySelectorAll("circle");

  circles.forEach(circle => {
    circle.addEventListener("mousemove", event => {
      let skillItem = document.getElementById(`li-${circle.id}`);
      tooltip.html(skillItem.innerHTML).style("display", "block");
    });
    circle.addEventListener("mouseout", event => {
      tooltip.html("<span>&nbsp;</span>").style("display", "none");
    });
  });
};
