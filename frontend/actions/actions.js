import * as ApiUtil from "../util/api_util";
// TODO implement errors

export const RECEIVE_NORMALIZED_JOBS = "RECEIVE_NORMALIZED_JOBS";
export const RECEIVE_JOB_SKILLS = "RECEIVE_JOB_SKILLS";

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR ERRORS";

export const fetchNormalizedJobs = jobString => dispatch =>
  ApiUtil.fetchNormalizedJobs(jobString)
    .then(payload => dispatch(receiveNormalizedJobs(payload)))
    .fail(payload => dispatch(receiveErrors(payload)));

export const fetchJobSkills = uuid => dispatch =>
  ApiUtil.fetchJobSkills(uuid)
    .then(payload => dispatch(receiveJobSkills(payload)))
    .fail(payload => dispatch(receiveErrors(payload)));

const receiveNormalizedJobs = payload => ({
  type: RECEIVE_NORMALIZED_JOBS,
  payload
});

const receiveJobSkills = payload => ({
  type: RECEIVE_JOB_SKILLS,
  payload
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
