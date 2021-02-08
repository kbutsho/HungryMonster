const searchMeal = () => {
    const inputValue = document.getElementById("meal").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then((res) => res.json())
    .then(data => displayMeals(data.meals))
    .catch(error => displayError('Meal Not found !! try again'));
}
const displayMeals = meals => {
    const mealsDiv = document.getElementById("meals");
    mealsDiv.innerHTML = " ";
    meals.forEach(meal => {
        const newItems = document.createElement("div");
        newItems.className = "mealItems";
        const mealInfo = `
            <img onclick="displayDetails('${meal.strMealThumb}','${meal.strMeal}','${meal.strIngredient1}','${meal.strIngredient2}','${meal.strIngredient3}','${meal.strIngredient4}','${meal.strIngredient5}','${meal.strIngredient6}')" class="image" src="${meal.strMealThumb}">
            <h3 onclick="displayDetails('${meal.strMealThumb}','${meal.strMeal}','${meal.strIngredient1}','${meal.strIngredient2}','${meal.strIngredient3}','${meal.strIngredient4}','${meal.strIngredient5}','${meal.strIngredient6}')" class="mealName" >${meal.strMeal}</h3>      
        `;
        newItems.innerHTML = mealInfo;
        mealsDiv.appendChild(newItems);
    });
}
// show details 
const displayDetails = (strMealThumb,strMeal,Ingredient1, Ingredient2, Ingredient3, Ingredient4, Ingredient5, Ingredient6) => {
    const ItemInfoDiv = document.getElementById('itemsDetails');
    ItemInfoDiv.innerHTML = ' ';
    ItemInfoDiv.innerHTML = `
        <img class="IngredientImage" src="${strMealThumb}">
        <h2 >${strMeal}</h2>
        <h4 class="Ingredient">Ingredient</h4>
        <h6>${Ingredient1}</h6>
        <h6>${Ingredient2}</h6> 
        <h6>${Ingredient3}</h6> 
        <h6>${Ingredient4}</h6> 
        <h6>${Ingredient5}</h6>
        <h6>${Ingredient6}</h6>      
        `;
}
// error message
const displayError = error => {
    const errorTag = document.getElementById('error');
    errorTag.innerText = error;
}








