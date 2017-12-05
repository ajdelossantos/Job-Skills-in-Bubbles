// Retrieves the canonical job title for a synonymous job title
export const fetchNormalizedJobs = jobString =>
  $.ajax({
    method: "GET",
    url: `http://api.dataatwork.org/v1/jobs/normalize?job_title=${jobString}`
  });

// Retrieves a collection of skills associated with a specified job
// "UUID" === "Universally Unique Identifier"
export const fetchJobSkills = uuid =>
  $.ajax({
    method: "GET",
    url: `http://api.dataatwork.org/v1/jobs/${uuid}/related_skills`
  });
