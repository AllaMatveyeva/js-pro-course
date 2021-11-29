export class View {
  constructor(options) {
    this.onAddCallback = options.onAddCallback;
    this.list = document.querySelector("ul");
    this.initListener();
  }
  initListener = () => {
    this.list.addEventListener("click", this.getItem);
  };

  getItem = (e) => {
    let item = e.target;
    this.onAddCallback?.(item);
  };

  yesItem = (item) => {
    alert(`Да, ты угадал! `);
    this.getBodyStyle(item);
    this.list.remove();
  };

  getBodyStyle = (item) => {
    let body = document.querySelector("body");
    let src = item.getAttribute("src");
    body.style.cssText = `
    background-image:url(${src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    position:relative;
      `;
  };
  noItem = () => {
    alert("Давай еще!");
  };
}
