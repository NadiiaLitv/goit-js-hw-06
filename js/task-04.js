const counterValue = document.querySelector("#value");
let currentValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

incrementBtn.addEventListener("click", () => {
  currentValue += 1;
  updateCounter();
});
decrementBtn.addEventListener("click", () => {
  currentValue -= 1;
  updateCounter();
});
function updateCounter() {
  counterValue.textContent = currentValue;
}
