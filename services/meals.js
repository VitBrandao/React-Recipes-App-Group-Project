const meals = {
  url: {
    categoryList: () => 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
    ingredient: (ingredient) => `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    name: (name = '') => `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`,
    first: (firstLetter) => `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter};`,
    areas: () => 'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
    byArea: (area) => `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`,
  },

  ingredient: (ingredient) => fetch(meals.url.ingredient(ingredient))
    .then((res) => res.json())
    .then((data) => data).catch((err) => err),

  name: (name) => fetch(meals.url.name(name))
    .then((res) => res.json())
    .then((data) => data).catch((err) => err),

  first: (firstLetter) => fetch(meals.url.first(firstLetter))
    .then((res) => res.json())
    .then((data) => data).catch((err) => err),

  area: () => fetch(meals.url.area())
    .then((res) => res.json())
    .then((data) => data).catch((err) => err),

  categoryList: () => fetch(meals.url.categoryList())
    .then((res) => res.json())
    .then((data) => data).catch((err) => err),

  byArea: (area) => fetch(meals.url.byArea(area))
    .then((res) => res.json())
    .then((data) => data).catch((err) => err),

};

export default meals;
