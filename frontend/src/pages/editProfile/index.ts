export { default as EditProfilePage } from "./editProfile.hbs?raw";
import Handlebars from "handlebars";

import avatarImg from "../../assets/01.jpg";

Handlebars.registerHelper("userProfileChangeData", () => ({
  name: "John",
  avatar: avatarImg,
}));

Handlebars.registerHelper("userProfileChangeDetails", () => [
  { label: "Email", value: "john.doe@example.com", name: "email" },
  { label: "Login", value: "johnDoe123", name: "login" },
  { label: "Name", value: "John", name: "first_name" },
  { label: "Surname", value: "Doe", name: "second_name" },
  { label: "Phone", value: "+123 456 7890", name: "phone" },
]);

Handlebars.registerHelper("saveDataButton", () => [
  { label: "Save", type: "primary", action: "saveData()" },
]);
