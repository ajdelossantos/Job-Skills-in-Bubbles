import { attachSearchListener } from "./scripts/search_listener";
import { attachAboutModalListener } from "./scripts/about_modal_listener";
import { renderDefaultChart } from "./scripts/default_chart";
import { renderTooltipOnHover } from "./scripts/tooltip_on_hover";

document.addEventListener("DOMContentLoaded", () => {
  renderDefaultChart();
  attachSearchListener();
  attachAboutModalListener();
  renderTooltipOnHover();
});