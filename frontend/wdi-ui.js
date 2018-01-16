import * as JobSearch from "./scripts/job_search";
import * as d3 from "d3";

document.addEventListener("DOMContentLoaded", () => {
  var http = require("http");
  setInterval(function() {
    http.get("https://ajdelossantos.github.io/Job-Skills-in-Bubbles/");
  }, 300000); // every 5 minutes (300000)

  $("#search-btn").click(function() {
    var searchField = $("#search").val();
    JobSearch.fetchNormalizedJob(searchField).then(response =>
      JobSearch.handleJob(response)
    );
  });
});
