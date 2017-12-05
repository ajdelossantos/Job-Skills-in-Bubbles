// normalizeJob
[
  {
    uuid: "string",
    title: "string",
    relevance_score: "string",
    parent_uuid: "string"
  }
];

// searchJob, fetchJob

[
  {
    uuid: "string",
    title: "string",
    normalized_job_title: "string",
    parent_uuid: "string"
  }
];

// fetchRelatedJobs

{
  "uuid": "string",
  "related_job_titles": [
    {
      "uuid": "string",
      "title": "string",
      "parent_uuid": "string"
    }
  ]
}

//fetchRelatedJobSkills

{
  "job_uuid": "string",
  "job_title": "string",
  "normalized_job_title": "string",
  "skills": [
    {
      "skill_uuid": "string",
      "skill_name": "string",
      "description": "string",
      "normalized_skill_name": "string",
      "importance": 0,
      "level": 0
    }
  ]
}
