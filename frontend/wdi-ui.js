import * as JobSearch from "./scripts/job_search";
import * as d3 from "d3";

document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById('search-btn');
  const searchField = document.getElementById('search');

  const aboutToggle = document.getElementById('about-toggle');
  const modalScreen = document.querySelector('.modal-screen');
  const modal = document.querySelector('.modal');
  const aboutClose = document.querySelector('.about__close');

  function handleSearch() {
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

  searchBtn.addEventListener('click', handleSearch);

  modalScreen.addEventListener('click', hideAboutModal);
  aboutClose.addEventListener('click', hideAboutModal);
  aboutToggle.addEventListener('click', displayAboutModal);
});