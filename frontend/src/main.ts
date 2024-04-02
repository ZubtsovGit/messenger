import Handlebars from "handlebars";
import * as Components from "./components";
import * as Pages from "./pages";

const pages = {
  nav: [Pages.NavigatePage],
  login: [Pages.LoginPage, { test: "Welcome back!" }],
  signup: [Pages.SignUp],
  list: [Pages.ListPage],
  profile: [Pages.Profile],
  feedback: [Pages.Feedback],
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
