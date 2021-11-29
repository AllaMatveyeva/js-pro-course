export class Controller {
  constructor(View, Model) {
    this.view = new View({
      onAddCallback: this.userChoiceItem,
    });
    this.model = new Model({
      onchoiceItemYes: this.onchoiceItemToModelYes,
      onchoiceItemNo: this.onchoiceItemToModelNo,
    });
  }

  userChoiceItem = (item) => {
    this.model.choiceItem(item);
  };
  onchoiceItemToModelYes = (item) => {
    this.view.yesItem(item);
  };
  onchoiceItemToModelNo = () => {
    this.view.noItem();
  };
}
