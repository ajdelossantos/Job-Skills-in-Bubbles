const fetchNormalizedJobs = jobString =>
  $.ajax({
    method: "GET",
    url: `http://api.dataatwork.org/v1/jobs/normalize?job_title=${jobString}`,
    dataType: "json"
  });

const fetchJobSkills = uuid =>
  $.ajax({
    method: "GET",
    url: `http://api.dataatwork.org/v1/jobs/${uuid}/related_skills`,
    dataType: "json"
  });

const displayJobs = payload => {
  $.each(payload, function() {
    $.each(this, function(k, v) {
      if (k === "uuid") {
        let jobUuid = v;
        return console.log(jobUuid);
      }
    });
  });
};

$("#search-btn").click(function() {
  var searchField = $("#search").val();
  fetchNormalizedJobs(searchField).then(response => displayJobs(response));
});

$("#search-results ul").append();
