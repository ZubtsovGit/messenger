export { default as Error404 } from "./error404.hbs?raw";

import Handlebars from "handlebars";

Handlebars.registerHelper("errorActions", () => [
  { label: "Back to chats", class: "back-to-chats" },
]);
