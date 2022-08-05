const drinks = {
  url: {
    categoryList: () => 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
    ingredient: (ingredient) => `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    name: (name = '') => `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`,
    first: (firstLetter) => `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter};`,
  },

  ingredient: (ingredient) => fetch(drinks.url.ingredient(ingredient))
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err),

  name: (name) => fetch(drinks.url.name(name))
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err),

  first: (firstLetter) => fetch(drinks.url.first(firstLetter))
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err),

  categoryList: () => fetch(drinks.url.categoryList())
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err),
};

export default drinks;
