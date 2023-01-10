function addNumber(num) {
    const display = document.getElementById("display");
    display.value += num;
  }
  
  function addOperator(operator) {
    const display = document.getElementById("display");
    display.value += operator;
  }
  
  function addDecimal() {
    const display = document.getElementById("display");
    if (!display.value.includes(".")) {
      display.value += ".";
    }
  }
  
  function calculate() {
    const display = document.getElementById("display");
    display.value = eval(display.value);
  }

  function clearResult() {
    display.value = "";
  }