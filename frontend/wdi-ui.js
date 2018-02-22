import * as JobSearch from "./scripts/job_search";
import * as d3 from "d3";

document.addEventListener("DOMContentLoaded", () => {
  $("#search-btn").click(function() {
    var searchField = $("#search").val();
    JobSearch.fetchNormalizedJob(searchField).then(response =>
      JobSearch.handleJob(response)
    );
  });
});


const body = document.body;

function handleAboutModal(e) {
  console.log('clicked');
  console.log(e.target);
}

body.addEventListener('click', handleAboutModal);

