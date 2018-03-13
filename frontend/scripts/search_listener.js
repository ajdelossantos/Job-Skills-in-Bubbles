import * as JobSearch from "./job_search";

export const attachSearchListener = () => {
  const searchBtn = document.getElementById('search-btn');
  const searchField = document.getElementById('search');

  function fetchData() {
    JobSearch.fetchNormalizedJob(searchField.value)
    .then(response => JobSearch.handleJob(response))
    .fail(errors => {
      window.alert('No job title suggestions found. Try again!');
    });
  }

  searchBtn.addEventListener('click', fetchData);
  // TODO: Reintegrate at a later point
  // searchField.addEventListener('change', fetchData);

  document.addEventListener('keydown', function(e) {
    if (e.key === "Enter") {
      fetchData();
    }
  });
};