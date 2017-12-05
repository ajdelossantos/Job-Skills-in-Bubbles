const fetchNormalizedJobs = jobString =>
  $.ajax({
    method: "GET",
    url: `http://api.dataatwork.org/v1/jobs/normalize?job_title=${jobString}`,
    dataType: "json"
  });

$("#search").keyup(function() {
  var searchField = $("#search").val();
  fetchNormalizedJobs(searchField).then(response => console.log(response));
});
