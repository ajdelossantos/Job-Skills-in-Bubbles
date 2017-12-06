export const fetchNormalizedJob = jobString =>
  $.ajax({
    method: "GET",
    url: `http://api.dataatwork.org/v1/jobs/normalize?job_title=${jobString}`,
    dataType: "json"
  });

export const fetchJobSkills = uuid =>
  $.ajax({
    method: "GET",
    url: `http://api.dataatwork.org/v1/jobs/${uuid}/related_skills`,
    dataType: "json"
  });

let currentJob = {};
let currentJobSkills = [];

export const getJob = () => currentJob;

export const getSkills = () => currentJobSkills;

export const handleJob = payload => {
  $.each(payload, function() {
    $.each(this, function(k, v) {
      currentJob[k] = v;
    });
  });
  clearSearchResult();
  populateSearchResult(currentJob);
  clearSearchInput();
  console.log(currentJob);
  return currentJob;
};

export const assignSkills = payload => {
  $.each(payload, function(k, v) {
    if (k === "skills") {
      currentJobSkills = v;
    }
  });
  console.log(currentJobSkills);
  return currentJobSkills;
};

export const receiveJobSkills = () => {
  if (currentJob) {
    currentJobSkills = [];
    let uuid = $("a[data-jobUuid]").data().jobuuid;
    fetchJobSkills(uuid).then(response => assignSkills(response));
  }
};

export const populateSearchResult = job => {
  $("#search-results").append(
    `<li>
      <a data-jobUuid=${job.uuid} href="#">${job.title}</a>
    </li>`
  );
};
export const clearSearchResult = () => $("#search-results").empty();
export const clearSearchInput = () => $("#search").val("");
