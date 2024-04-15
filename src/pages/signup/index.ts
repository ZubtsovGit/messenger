import Handlebars from "handlebars";
export { default as SignUp } from "./signup.hbs?raw";

Handlebars.registerHelper("signupFields", () => [
  { label: "Name", name: "first_name", type: "text" },
  { label: "Surname", name: "second_name", type: "text" },
  { label: "Login", name: "login", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
  { label: "Number", name: "phone", type: "tel" },
  { label: "Password (again)", name: "passwordRepeat", type: "password" },
]);

Handlebars.registerHelper("signupButtons", () => [
  { label: "Create a profile", type: "primary", action: "signUpAction()" },
  { label: "Sign in", type: "link", action: "signInAction()" },
]);
