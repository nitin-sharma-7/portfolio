function addInResult(value) {
  document.querySelector("#result").value += value;
}
function clearResult() {
  document.querySelector("#result").value = "";
}
function deleteLastFromResult() {
  let result = document.querySelector("#result").value;
  document.querySelector("#result").value = result.slice(0, result.length - 1);
}
function equal() {
  let result = document.querySelector("#result").value;
  try {
    document.querySelector("#result").value = eval(result);
  } catch {
    document.querySelector("#result").value = "error";
  }
}
