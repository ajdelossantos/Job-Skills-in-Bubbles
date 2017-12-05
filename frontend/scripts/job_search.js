const fetchNormalizedJobs = jobString =>
  $.ajax({
    method: "GET",
    url: `http://api.dataatwork.org/v1/jobs/normalize?job_title=${jobString}`,
    dataType: "json"
  });

const searchJob = jobString =>
  $.ajax({
    method: "GET",
    url: `http://api.dataatwork.org/v1/jobs/autocomplete?contains=${jobString}`
  });

const fetchJobSkills = uuid =>
  $.ajax({
    method: "GET",
    url: `http://api.dataatwork.org/v1/jobs/${uuid}/related_skills`,
    dataType: "json"
  });

// let currentJobUuid = "";
let currentJob = {};

const getJobs = payload => {
  $.each(payload, function(index) {
    $.each(this, function(k, v) {
      // if (k === "uuid") {
      //   currentJobUuid = v;
      //   console.log(currentJobUuid);
      // }
      currentJob[k] = v;
    });
    console.log(currentJob);
  });
};

const receiveJobSkills = () => {
  if (currentJob) {
    let uuid = currentJob.uuid;
    fetchJobSkills(uuid).then(response => console.log(response));
  }
};

$("#search-btn").click(function() {
  currentJob = {};
  var searchField = $("#search").val();
  fetchNormalizedJobs(searchField).then(response => getJobs(response));
});

$("#data-btn").click(function() {
  return receiveJobSkills();
});

$("#search-results ul").append();
