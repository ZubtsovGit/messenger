import Handlebars from "handlebars";
import "./chat.scss";

import user1 from "../../assets/01.jpg";
import user2 from "../../assets/02.jpg";
import user3 from "../../assets/03.jpg";

Handlebars.registerHelper("users", () => {
  return [
    {
      name: "Boomer",
      avatar: user1,
      message: "Image",
      time: "10:49",
      messages_count: 2,
    },
    {
      name: "Shimba",
      avatar: user2,
      message: "You: sticker",
      active: true,
      time: "12:00",
      messages_count: 3,
    },
    {
      name: "Roach",
      avatar: user3,
      message: "You: Cool!",
      time: "Fri",
      messages_count: 4,
    },
  ];
});

export { default as ChatPage } from "./chat.hbs?raw";
