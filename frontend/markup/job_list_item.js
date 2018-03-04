export const jobListItem = job => (
  `
    <li id=${job.uuid}>
      <a data-jobUuid=${job.uuid} href="#">
      ${job.suggestion}</a>
    </li>
  `
);