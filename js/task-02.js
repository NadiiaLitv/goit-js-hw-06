const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const itemEl = document.createElement(`li`);
itemEl.textContent = ingredients[0];
itemEl.classList.add(`item`);

console.log(document.querySelector(`#ingredients`).append(itemEl));

console.log(document.querySelector(`#ingredients`));
