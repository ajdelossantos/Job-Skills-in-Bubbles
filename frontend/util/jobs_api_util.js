// Retrieves the canonical job title for a synonymous job title
export const normalizeJob = jobString =>
  $.ajax({
    method: "GET",
    url: `http://api.dataatwork.org/v1/jobs/normalize?job_title=${jobString}`
  });

// Retrieves the names, descriptions, and UUIDs of all job titles matching a given search criteria.
// "UUID" === "Universally Unique Identifier"
export const searchJob = jobString =>
  $.ajax({
    method: "GET",
    url: `http://api.dataatwork.org/v1/jobs/autocomplete?contains=${jobString}`
  });

//TODO May need to add begins/ends with search function...

export const fetchJob = uuid =>
  $.ajax({
    method: "GET",
    url: `http://api.dataatwork.org/v1/jobs/${uuid}`
  });

// Retrieves a collection of jobs associated with a specified job.
export const fetchRelatedJobs = uuid =>
  $.ajax({
    method: "GET",
    url: `http://api.dataatwork.org/v1/jobs/${uuid}/related_jobs`
  });

// Retrieves a collection of skills associated with a specified job
export const fetchRelatedJobSkills = uuid =>
  $.ajax({
    method: "GET",
    url: `http://api.dataatwork.org/v1/jobs/${uuid}/related_skills`
  });
