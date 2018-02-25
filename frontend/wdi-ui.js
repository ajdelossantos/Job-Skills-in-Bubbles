import * as JobSearch from "./scripts/job_search";
import * as d3 from "d3";

document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById('search-btn');
  const searchField = document.getElementById('search');

  const aboutToggle = document.getElementById('about-toggle');
  const modalScreen = document.querySelector('.modal-screen');
  const modal = document.querySelector('.modal');
  const aboutClose = document.querySelector('.about__close');

  const aboutGroup = document.querySelector('.about-group');

  function handleSearch() {
    JobSearch.fetchNormalizedJob(searchField.value)
    .then(response => JobSearch.handleJob(response));
  }

  function hideAboutModal(e) {
    e.stopPropagation();
    modal.classList.add('hidden');
    modalScreen.classList.remove('active');
  }

  function displayAboutModal(e) {
    e.stopPropagation();
    setTimeout(() => {
      modalScreen.classList.add('active');
    }, 100);

    modal.classList.remove('hidden');
  }

  function showAboutGroup(e) {
    setTimeout(() => {
      aboutGroup.classList.add('active');
    },100);
  }

  function hideAboutGroup(e) {
    aboutGroup.classList.remove('active');
  }

  searchBtn.addEventListener('click', handleSearch);

  modalScreen.addEventListener('click', hideAboutModal);
  modalScreen.addEventListener('click', hideAboutGroup);
  aboutClose.addEventListener('click', hideAboutModal);
  aboutClose.addEventListener('click', hideAboutGroup);

  aboutToggle.addEventListener('click', displayAboutModal);
  aboutToggle.addEventListener('click', showAboutGroup);
});