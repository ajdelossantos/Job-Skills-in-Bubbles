import * as JobSearch from "./job_search";

export const handleSearch = () => {
  const searchBtn = document.getElementById('search-btn');
  const searchField = document.getElementById('search');

  function fetchData() {
    JobSearch.fetchNormalizedJob(searchField.value)
    .then(response => JobSearch.handleJob(response));
  }

  searchBtn.addEventListener('click', fetchData);
};