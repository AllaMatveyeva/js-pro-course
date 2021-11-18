class TreeMenu extends HTMLElement {
  constructor() {
    super();
  }

  shadow = this.attachShadow({ mode: "open" });
  render() {
    this.shadowRoot.append(tmpl.content.cloneNode(true));
    this.shadowRoot.querySelector(".menu").classList.add("closed");
  }

  openClose() {
    this.shadowRoot.querySelector('slot[name="title"]').onclick = () => {
      // открыть/закрыть меню
      this.shadowRoot.querySelector(".menu").classList.toggle("closed");
    };
  }

  getSelect() {
    this.shadowRoot.querySelector("ul").addEventListener("click", (e) => {
      if (
        !this.shadowRoot.querySelector(".menu").classList.contains("closed")
      ) {
        if (e.target.getAttribute("slot") == "item") {
          document.addEventListener(
            "select",
            (event) => (event.target.style.color = "blue")
          );
          e.target.dispatchEvent(
            new CustomEvent("select", {
              bubbles: true,
              composed: true,
            })
          );
        }
      }
    });
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }

    if (!this.openClosed) {
      this.openClose();
      this.openClosed = true;
    }
    if (!this.getSelected) {
      this.getSelect();
      this.getSelected = true;
    }
  }

  disconnectedCallback() {
    this.render();
    this.openClose();
  }
}
customElements.define("tree-menu", TreeMenu);
