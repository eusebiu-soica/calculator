// variables
let input = document.querySelector("input");
let rez;
let val = [];
let abc = /[a-zA-Z]/g;
let num = /[0-9]/g;

// load function and enter key result
function load() {
  input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      document.getElementById("equal").click();
    }
  });
}

// input change function
function chFunction() {
  if (input.value.match(abc)) {
    input.value = input.value.slice(0, -1);
  }
}

// prevent spaces in the input field
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 32) {
    input.value = input.value.slice(0, -1);
  }
});

// write in input function
function typeFunction(n) {
  input.value += n;
}

// equal function
function equal() {
  try {
    rez = eval(input.value);
    input.value = rez;
  } catch (err) {
    input.value = "Eroare";
    console.log(err);
  }
}

// delete one by one content function
function deleteContent() {
  input.value = input.value.slice(0, -1);
}

// clear input function
function erase() {
  input.value = "";
}

// Round brackets function
function roundBrackets() {
  if (input.value.substr(-1).match(num)) {
    round = ")";
    for (let i = 0; i < val.length; i++) {
      input.value += round;
    }
    val = [];
  } else {
    round = "(";
    val.push(round);
    input.value += round;
  }
}
