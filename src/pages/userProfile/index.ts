export { default as UserProfilePage } from "./userProfile.hbs?raw";
import Handlebars from "handlebars";

import avatarImg from "../../assets/01.jpg";

Handlebars.registerHelper("userData", () => ({
  name: "John",
  avatar: avatarImg,
}));

Handlebars.registerHelper("userProfileDetails", () => [
  { label: "Email", value: "john.doe@example.com" },
  { label: "Login", value: "johnDoe123" },
  { label: "Name", value: "John" },
  { label: "Surname", value: "Doe" },
  { label: "Phone", value: "+123 456 7890" },
]);

Handlebars.registerHelper("userProfileActions", () => [
  { label: "Change Password", class: "change-password" },
  { label: "Edit Details", class: "edit" },
  { label: "Logout", class: "logout" },
]);
