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

let currentJobUuid = [];

const displayJobs = payload => {
  $.each(payload, function(index) {
    $.each(this, function(k, v) {
      if (k === "uuid") {
        currentJobUuid.push(v);
        console.log(currentJobUuid);
        return receiveJobSkills();
      }
    });
  });
};

const receiveJobSkills = () => {
  if (currentJobUuid.length > 0) {
    let uuid = currentJobUuid[0];
    fetchJobSkills(uuid).then(response => console.log(response));
  }
};

$("#search-btn").click(function() {
  currentJobUuid = [];
  var searchField = $("#search").val();
  fetchNormalizedJobs(searchField).then(response => displayJobs(response));
});

$("#search-results ul").append();
