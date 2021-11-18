describe("проверка работы калькулятора", () => {
  describe("проверка оператора '+'", () => {
    const operate = (x, y) => getRes(x, y, "+");
    describe("сложение двух чисел больше 0", () => {
      const tests = ["сложение двух неслучайных чисел больше 0", 5, 2, 7];

      let result = operate(tests[1], tests[2]);

      it(tests[0], () => {
        assert.equal(result, tests[3]);
      });
    });

    describe("сложение cо случайным числом", () => {
      for (let i = 0; i < 15; i++) {
        let x = 2;
        let y = 1 * i;
        let result = operate(x, y);
        it("увеличивает 2 на (y*i)", () => {
          assert.equal(result, x + (1 + i - 1));
        });
      }
    });

    describe("сложение одинаковых чисел", () => {
      for (let i = 0; i < 15; i++) {
        let x = Math.random() * 1000;
        let y = x;
        let result = operate(x, y);
        it("складывает два одинаковых случайных числа", () => {
          assert.equal(result, x + x);
        });
      }
    });

    describe("сложение с отрицательным числом", () => {
      for (let i = 1; i < 15; i++) {
        let x = 3;
        let y = -1 * (1 * i);
        let result = operate(x, y);
        it("увеличивает 3 на -(y*i)", () => {
          assert.equal(result, x + -1 * (1 + i - 1));
        });
      }
    });

    describe("сложение двух отрицательных чисел", () => {
      for (let i = 1; i < 15; i++) {
        let x = -3;
        let y = -1 * (1 * i);
        let result = operate(x, y);
        it("увеличивает отрицательную 3 на -(y*i)", () => {
          assert.equal(result, x + -1 * (1 + i - 1));
        });
      }
    });

    describe("сложение с нулем", () => {
      for (let i = 0; i < 15; i++) {
        let x = Math.random() * 1000;
        let y = 0;
        let result = operate(x, y);
        it("складывает случайное число с нулем", () => {
          assert.equal(result, x);
        });
      }
    });

    describe("исключительные случаи cо сложением", () => {
      const tests = [
        [
          "складывает число со строкой(цифры)",
          Math.random() * 1000,
          "123",
          NaN,
        ],
        [
          "складывает число со строкой(буквы)",
          Math.random() * 1000,
          "tra-ta-ta",
          NaN,
        ],
        ["складывает число с массивом", Math.random() * 1000, [1, 2, "a"], NaN],
      ];

      tests.forEach((test) => {
        let result = operate(test[1], test[2]);

        it(test[0], () => {
          assert.isNaN(result);
        });
      });
    });
  }); //
  describe("проверка оператора '-'", () => {
    const operate = (x, y) => getRes(x, y, "-");
    describe("вычитание двух чисел больше 0", () => {
      const tests = ["вычитание двух неслучайных чисел больше 0", 5, 2, 3];

      let result = operate(tests[1], tests[2]);

      it(tests[0], () => {
        assert.equal(result, tests[3]);
      });
    });

    describe("вычитание cо случайным числом", () => {
      for (let i = 0; i < 15; i++) {
        let x = 2;
        let y = 1 * i;
        let result = operate(x, y);
        it("вычитает из 2  (y*i)", () => {
          assert.equal(result, x + (1 - i - 1));
        });
      }
    });

    describe("вычитание одинаковых чисел", () => {
      for (let i = 0; i < 15; i++) {
        let x = Math.random() * 1000;
        let y = x;
        let result = operate(x, y);
        it("вычитает два одинаковых случайных числа", () => {
          assert.equal(result, 0);
        });
      }
    });

    describe("вычитание отрицательного числа", () => {
      for (let i = 1; i < 15; i++) {
        let firstOpers = [3, -5, 10];
        firstOpers.forEach((firstOp) => {
          let y = -1 * (1 * i);
          let result = operate(firstOp, y);
          it("уменьшает 3 на -(y*i)", () => {
            assert.equal(result, firstOp + -1 * (1 - i - 1));
          });
        });
      }
    });

    describe("вычитание нуля", () => {
      for (let i = 0; i < 15; i++) {
        let x = Math.random() * 1000;
        let y = 0;
        let result = operate(x, y);
        it("уменьшает случайное число на ноль", () => {
          assert.equal(result, x);
        });
      }
    });

    describe("исключительные случаи c вычитанием", () => {
      const tests = [
        ["вычитает из числа строку(цифры)", Math.random() * 1000, "123", NaN],
        [
          "вычитает из числа строку(буквы)",
          Math.random() * 1000,
          "tra-ta-ta",
          NaN,
        ],
        ["вычитает из числа массив", Math.random() * 1000, [1, 2, "a"], NaN],
      ];

      tests.forEach((test) => {
        let result = operate(test[1], test[2]);

        it(test[0], () => {
          assert.isNaN(result);
        });
      });
    });
  });

  describe("проверка введенного оператора", () => {
    let operators = ["*", "/", " ", "564", 8];

    operators.forEach((operator) => {
      let result = getRes(5, 6, operator);
      it("введен оператор, отличный от '+' и '-'", () => {
        assert.equal(
          result,
          console.log("Возможно только сложение и вычитание")
        );
      });
    });
  });
});
