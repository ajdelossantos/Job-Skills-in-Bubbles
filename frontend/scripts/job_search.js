import * as SkillsGraphics from "./skills_graphics";
import { jobListItem } from "../markup/job_list_item";
import { test } from "../util/test-data";

export const fetchNormalizedJob = jobString =>
  $.ajax({
    method: "GET",
    url: `https://api.dataatwork.org/v1/jobs/autocomplete?contains=${
      jobString
    }`,
    dataType: "json"
  });

export const fetchJobSkills = uuid =>
  $.ajax({
    method: "GET",
    url: `https://api.dataatwork.org/v1/jobs/${uuid}/related_skills`,
    dataType: "json"
  });

let jobsList = [];
let currentJob = test;

export const getJobs = () => jobsList;
export const getJob = () => currentJob;


export const assignCurrentJob = payload => {
  currentJob = payload;
  SkillsGraphics.renderSkills();
  SkillsGraphics.skillBubbleChart();
  return currentJob;
};

export const receiveJobSkills = uuid => {
  currentJob = [];
  fetchJobSkills(uuid).then(response => assignCurrentJob(response));
};

export const displaySearchList = () => {
  const searchList = document.getElementById('search-list');
  searchList.classList.remove('hidden');
};

export const populateSearchResult = jobs => {
  jobs.forEach(job => {
    // jobListItem(job) returns markup
    $("#search-results").append(jobListItem(job));
    
    $(`#${job.uuid}`).click((event) => {
      event.preventDefault();
      clearSearchResult();
      return receiveJobSkills(job.uuid);
    });
  });
};

export const clearSearchResult = () => $("#search-results").empty();
export const clearSearchInput = () => $("#search").val("");

export const handleJob = payload => {
  jobsList = payload;
  clearSearchResult();
  populateSearchResult(jobsList);
  displaySearchList();
  clearSearchInput();
  return jobsList;
};