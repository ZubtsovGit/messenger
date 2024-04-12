import Handlebars from "handlebars";
import "./chat.scss";

import user1 from "../../assets/01.jpg";
import user2 from "../../assets/02.jpg";
import user3 from "../../assets/03.jpg";

Handlebars.registerHelper("users", () => {
  return [
    { name: "user-1", avatar: user1 },
    { name: "user-2", avatar: user2, active: true },
    { name: "user-3", avatar: user3 },
  ];
});

export { default as ChatPage } from "./chat.hbs?raw";
