export class Router {
  constructor() {
    this.root = document.querySelector(".tabs-desc");
  }
  init() {
    this.initEv();
    this.onChangeHash();
  }
  initEv() {
    window.addEventListener("hashchange", this.onChangeHash);
  }
  setRoutes = (routes) => {
    this.routes = routes;
  };
  onChangeHash = () => {
    let hash = location.hash.substr(1);
    let route = this.routes.find((route) => hash == route.hash);
    if (!route) {
      route = this.routes.find((route) => route.isDefoult);
    }
    if (route) {
      this.loadPage(route.html);
    }
  };
  loadPage = (html) => {
    fetch(html)
      .then((response) => response.text())
      .then((text) => (this.root.innerHTML = text));
  };
}
