import * as JobSearch from "./job_search";

export const attachSearchListener = () => {
  const searchBtn = document.getElementById('search-btn');
  const searchField = document.getElementById('search');

  function fetchData() {
    console.log('fetch!');
    JobSearch.fetchNormalizedJob(searchField.value)
    .then(response => JobSearch.handleJob(response));
  }

  searchBtn.addEventListener('click', fetchData);
  searchField.addEventListener('change', fetchData);

  document.addEventListener('keydown', function(e) {
    if (e.key === "Enter") {
     fetchData();
    }
  });
};