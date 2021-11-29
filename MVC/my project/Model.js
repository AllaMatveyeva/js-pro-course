export class Model {
  constructor(option) {
    (this.onchoiceItemYes = option.onchoiceItemYes),
      (this.onchoiceItemNo = option.onchoiceItemNo),
      (this.items = document.querySelectorAll("li")),
      (this.arr = Array.from(this.items)),
      (this.randomNumber = Math.round(Math.random() * (this.arr.length - 1))),
      (this.item = this.getRandomItem());
  }
  getRandomItem = () => {
    return this.arr[this.randomNumber];
  };
  choiceItem = (item) => {
    return item.closest("li") === this.item
      ? this.onchoiceItemYes?.(item)
      : this.onchoiceItemNo();
  };
}
