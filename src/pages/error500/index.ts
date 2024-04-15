export { default as Error500 } from "./error500.hbs?raw";

import Handlebars from "handlebars";

Handlebars.registerHelper("errorActions", () => [
  { label: "Back to chats", class: "back-to-chats" },
]);
