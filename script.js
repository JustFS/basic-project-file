const searchInput = document.getElementById('searchInput');
const results = document.getElementById('results');
const randomMeal = document.getElementById('randomMeal');

search = '';

const fetchSearch = async() => {
	meals = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res => res.json())
    .then(res => res.meals) 
};

const getRandomMeal = async() => {
  randomResult = await fetch(
    `https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(res => res.meals)
}



const searchDisplay = async() => {
  await fetchSearch();

  if (meals === null){
    results.innerHTML = 'aucun résultat'
  }
  
  results.innerHTML = (
    
    meals.map(meal => (
            
      `
        <div class="recipeContainer">
          <div>${meal.strMeal}</div>
          <div>from : ${meal.strArea}</div>
          <div>category : ${meal.strCategory}</div>
          <p>${meal.strInstructions}</p>
          <img src='${meal.strMealThumb}' />
          <a src="${meal.strYoutube}"><i class="fab fa-youtube"></i></a>
        </div>
      `
    )).join('')
  );
};

searchInput.addEventListener('input', (e) => {
  search = e.target.value;
  searchDisplay();
})
randomMeal.addEventListener('click', searchDisplay)