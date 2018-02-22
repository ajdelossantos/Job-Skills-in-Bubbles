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
const modal = document.querySelector('.modal');
const aboutToggle = document.getElementById('about-toggle');

function hideAboutModal(e) {
  modal.classList.add('hidden');
}

function displayAboutModal(e) {
  e.preventDefault;
  console.log('clicked');
  console.log(e.target);
  modal.classList.toggle('hidden');
}

body.addEventListener('click', hideAboutModal);
aboutToggle.addEventListener('click', displayAboutModal);

