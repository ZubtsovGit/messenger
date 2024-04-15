import Handlebars from "handlebars";
export { default as EditProfileInputPage } from "./editProfileInput.hbs?raw";

import avatarImg from "../../assets/01.jpg";

Handlebars.registerHelper("userProfileChangeData", () => ({
  name: "John",
  avatar: avatarImg,
}));

Handlebars.registerHelper("userProfileEditableDetails", () => [
  { label: "Email", value: "john.doe@example.com", key: "email" },
  { label: "Login", value: "johnDoe123", key: "login" },
  { label: "Name", value: "John", key: "first_name" },
  { label: "Surname", value: "Doe", key: "second_name" },
  { label: "Phone", value: "+123 456 7890", key: "phone" },
]);

Handlebars.registerHelper("saveInputButton", () => [
  { label: "Save", type: "primary", action: "saveData()" },
]);
