export { default as EditPasswordPage } from "./editPassword.hbs?raw";
import Handlebars from "handlebars";

import avatarImg from "../../assets/01.jpg";

Handlebars.registerHelper("userProfileDataChangePassword", () => ({
  name: "John",
  avatar: avatarImg,
}));

Handlebars.registerHelper("userProfileChangePassword", () => [
  { label: "Old password", value: "•••••••••", name: "oldPassword" },
  { label: "New password", value: "•••••••••", name: "newPassword" },
  {
    label: "Repeat new password",
    value: "•••••••••",
    name: "newPasswordRepeat",
  },
]);

Handlebars.registerHelper("savePasswordButton", () => [
  { label: "Save", type: "primary", action: "saveData()" },
]);
