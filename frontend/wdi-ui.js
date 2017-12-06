import * as JobSearch from "./scripts/job_search";
import * as SkillsGraphics from "./scripts/skills_graphics";
import * as d3 from "d3";

document.addEventListener("DOMContentLoaded", () => {
  $("#search-btn").click(function() {
    var searchField = $("#search").val();
    JobSearch.fetchNormalizedJob(searchField).then(response =>
      JobSearch.handleJob(response)
    );
  });

  $("#skill-btn").click(function() {
    return SkillsGraphics.renderSkills();
  });

  $("#chart-btn").click(function() {
    return SkillsGraphics.skillBubbleChart();
  });
});
