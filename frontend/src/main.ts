import Handlebars from "handlebars";
import * as Components from "./components";
import * as Pages from "./pages";

// Pages for navigation
const pages = {
  nav: [Pages.NavigatePage],
  login: [Pages.LoginPage],
  signup: [Pages.SignUp],
  chat: [Pages.ChatPage],
  profile: [Pages.UserProfilePage],
  editProfile: [Pages.EditProfilePage],
  editProfilePassword: [Pages.EditPasswordPage],
  error404: [Pages.Error404],
  error500: [Pages.Error500],
};

Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page: string) {
  //@ts-ignore
  const [source, context] = pages[page];
  const container = document.getElementById("app")!;
  container.innerHTML = Handlebars.compile(source)(context);
}

document.addEventListener("DOMContentLoaded", () => navigate("nav"));

document.addEventListener("click", (e) => {
  //@ts-ignore
  const page = e.target.getAttribute("page");
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
