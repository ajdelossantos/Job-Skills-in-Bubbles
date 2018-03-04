import * as JobSearch from "./job_search";

export const attachSearchListener = () => {
  const searchBtn = document.getElementById('search-btn');
  const searchField = document.getElementById('search');

  function fetchData() {
    JobSearch.fetchNormalizedJob(searchField.value)
    .then(response => JobSearch.handleJob(response));
  }

  searchBtn.addEventListener('click', fetchData);
  window.addEventListener('keydown', function(e) {
    if (e.key === "Enter") {
     fetchData();
    }
  });
};