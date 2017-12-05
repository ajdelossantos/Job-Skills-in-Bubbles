// Retrieves the names, descriptions, and UUIDs of all job titles matching a given search criteria.
export const searchJob = jobString =>
  $.ajax({
    method: "GET",
    url: `http://api.dataatwork.org/v1/jobs/autocomplete?contains=${jobString}`
  });

// Retrieves a collection of jobs associated with a specified job.
export const fetchRelatedJobs = uuid =>
  $.ajax({
    method: "GET",
    url: `http://api.dataatwork.org/v1/jobs/${uuid}/related_jobs`
  });

export const fetchJob = uuid =>
  $.ajax({
    method: "GET",
    url: `http://api.dataatwork.org/v1/jobs/${uuid}`
  });
