import * as JobSearch from "./scripts/job_search";
import * as d3 from "d3";

document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById('search-btn');
  const searchField = document.getElementById('search');
  const modalScreen = document.querySelector('.modal-screen');
  const modal = document.querySelector('.modal');
  const aboutToggle = document.getElementById('about-toggle');

  function handleSearch() {
    console.log(searchField.value);
    JobSearch.fetchNormalizedJob(searchField.value)
    .then(response => JobSearch.handleJob(response));
  }

  function hideAboutModal(e) {
    e.stopPropagation();
    modal.classList.add('hidden');
  }

  function displayAboutModal(e) {
    e.stopPropagation();
    modal.classList.remove('hidden');
  }

  modalScreen.addEventListener('click', hideAboutModal);
  aboutToggle.addEventListener('click', displayAboutModal);
  searchBtn.addEventListener('click', handleSearch);
});