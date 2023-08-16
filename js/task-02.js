const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const markup = document.querySelector(`#ingredients`);

const liItems = ingredients.map((ingredient) => {
  const itemEl = document.createElement(`li`);
  itemEl.textContent = ingredient;
  itemEl.classList.add(`item`);
  return itemEl;
});

markup.append(...liItems);

console.log(document.querySelector(`#ingredients`));
