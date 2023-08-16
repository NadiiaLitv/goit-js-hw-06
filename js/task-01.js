const categoriesItems = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});
