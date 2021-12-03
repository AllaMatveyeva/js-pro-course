import { Router } from "./Router.js";
const router = new Router();
router.setRoutes([
  { hash: "greet", html: "./pages/greet.html", isDefoult: true },
  {
    hash: "introd",
    html: "./pages/introd.html",
  },
  {
    hash: "principles",
    html: "./pages/principles.html",
  },
  { hash: "components", html: "./pages/components.html" },
]);
router.init();
