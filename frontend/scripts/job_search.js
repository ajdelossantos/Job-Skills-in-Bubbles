export const fetchNormalizedJob = jobString =>
  $.ajax({
    method: "GET",
    url: `http://api.dataatwork.org/v1/jobs/autocomplete?contains=${jobString}`,
    dataType: "json"
  });

export const fetchJobSkills = uuid =>
  $.ajax({
    method: "GET",
    url: `http://api.dataatwork.org/v1/jobs/${uuid}/related_skills`,
    dataType: "json"
  });

let jobsList = [];
let currentJob = [];

export const getJobs = () => jobsList;

export const getJob = () => currentJob;

export const handleJob = payload => {
  // $.each(payload, function() {
  //   $.each(this, function(k, v) {
  //     jobsList[k] = v;
  //   });
  // });
  jobsList = payload;
  clearSearchResult();
  populateSearchResult(jobsList);
  clearSearchInput();
  console.log(jobsList);
  return jobsList;
};

export const assignCurrentJob = payload => {
  // $.each(payload, function(k, v) {
  //   if (k === "skills") {
  //     currentJob = v;
  //   }
  // });
  currentJob = payload;
  console.log(currentJob);
  return currentJob;
};

export const receiveJobSkills = uuid => {
  // if (jobsList) {
  currentJob = [];
  // let uuid = $("a[data-jobUuid]").data().jobuuid;
  fetchJobSkills(uuid).then(response => assignCurrentJob(response));
  // }
};

export const populateSearchResult = jobs => {
  jobs.forEach(job => {
    $("#search-results").append(
      `<li id=${job.uuid}>
        <a data-jobUuid=${job.uuid} href="#">
        ${job.suggestion}</a>
      </li>`
    );
    $(`#${job.uuid}`).click(() => {
      console.log(job.uuid);
      return receiveJobSkills(job.uuid);
    });
  });
  // let link = $("li");
  // // let jobUuid = $("a[data-jobUuid]").data();
  // //link.click or link.onClick
  // link.click(() => {
  //   // return receiveJobSkills(jobsList[0].uuid);
  //   console.log("hello");
  // });
};
export const clearSearchResult = () => $("#search-results").empty();
export const clearSearchInput = () => $("#search").val("");
