const searchBtn = document.getElementById("searchButton");
searchBtn.addEventListener('click', () => {
    const inputValue = document.getElementById("meal").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then((res) => res.json())
        .then(data => displayMeals(data.meals))
});
const displayMeals = meals => {
    const mealsDiv = document.getElementById("meals");
    meals.forEach(meal => {
        const newItems = document.createElement("div");
        newItems.className = "mealItems";
        const mealInfo = `
            <img onclick="displayDetails('${meal.strMeal}')" class="image" src="${meal.strMealThumb}">
            <h3 onclick="displayDetails('${meal.strMeal}')" class="mealName" >${meal.strMeal}</h3>
        `;
        newItems.innerHTML = mealInfo;
        mealsDiv.appendChild(newItems);
    });
}
// show details (proble)m
    const displayDetails = meals => {
        const url = `https://www.themealdb.com/api/json/v1/1/list.php?i=list${meals}`
        fetch(url)
        .then(res => res.json())
        .then(data => randomItemInfo(data[0]));
    }
    const randomItemInfo = Meal=> {
        const ItemInfoDiv = document.getElementById('itemsDetails');
        ItemInfoDiv.innerHTML = `
        <h1>${Meal.strIngredient}</h1>       
    `
    }








