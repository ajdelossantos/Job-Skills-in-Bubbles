import { attachSearchListener } from "./scripts/search_listener";
import { attachAboutModalListener } from "./scripts/about_modal_listener";
import { renderDefaultChart } from "./scripts/default_chart";

document.addEventListener("DOMContentLoaded", () => {
  renderDefaultChart();
  attachSearchListener();
  attachAboutModalListener();
});