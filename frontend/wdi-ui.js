import { handleSearch } from "./scripts/handle_search";
import { handleAboutModal } from "./scripts/handle_about_modal";

document.addEventListener("DOMContentLoaded", () => {
  handleSearch();
  handleAboutModal();
});