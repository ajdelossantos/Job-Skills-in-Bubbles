import * as JobSearch from "./scripts/job_search";
import * as SkillsGraphics from "./scripts/skills_graphics";

document.addEventListener("DOMContentLoaded", () => {
  $("#search-btn").click(function() {
    var searchField = $("#search").val();
    JobSearch.fetchNormalizedJob(searchField).then(response =>
      JobSearch.handleJob(response)
    );
  });

  $("#data-btn").click(function() {
    return JobSearch.receiveJobSkills();
  });

  $("#data-link").click(function() {
    console.log("Hello");
  });

  $("#skill-btn").click(function() {
    return SkillsGraphics.listSkills();
  });
});
