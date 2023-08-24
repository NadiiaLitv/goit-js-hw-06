const elements = {
  fontSizeControl: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

elements.fontSizeControl.addEventListener("input", sizeChange);

function sizeChange(evt) {
  elements.text.style.fontSize = `${evt.currentTarget.value}px`;
}
