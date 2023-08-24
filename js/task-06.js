const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputSymbols);

function onInputSymbols(evt) {
  if (input.value.length === parseInt(input.dataset.length)) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}
