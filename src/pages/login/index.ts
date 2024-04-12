export { default as LoginPage } from "./login.hbs?raw";
import Handlebars from "handlebars";
import "./login.scss";

Handlebars.registerHelper("signInFields", () => [
  { label: "Login", name: "login", type: "text" },
  { label: "Password", name: "password", type: "password" },
]);

Handlebars.registerHelper("signInButtons", () => [
  { label: "Sign in", type: "primary", action: "signInAction()" },
  { label: "Sign up", type: "link", action: "signUpAction()" },
]);
