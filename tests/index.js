const inputX = document.body.children[0];
const inputOper = document.body.children[1];
const inputY = document.body.children[2];
let res = document.body.children[3];

const handleChange = () => {
  const x = +inputX.value;
  const y = +inputY.value;
  const oper = inputOper.value;
  let result;
  if (oper === "+") {
    result = x + y;
  } else if (oper === "-") {
    result = x - y;
  }
  res.innerHTML = result;
  res.onclick = () => {
    res.value = `${result}`;
  };
};

inputX.addEventListener("change", handleChange());
inputY.addEventListener("change", handleChange());
inputOper.addEventListener("change", handleChange());
