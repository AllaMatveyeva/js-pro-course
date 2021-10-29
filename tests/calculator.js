const getRes = (x, y, oper) => {
  let res;
  if (oper === "+") {
    res = typeof x !== "number" || typeof y !== "number" ? NaN : x + y;
  } else if (oper === "-") {
    res = typeof x !== "number" || typeof y !== "number" ? NaN : x - y;
  } else if (oper !== "-" || oper !== "+") {
    res = console.log("Возможно только сложение и вычитание");
  }
  return res;
};
