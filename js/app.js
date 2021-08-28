// Button Click Function
const searchFood = () => {
    const inputField = document.getElementById("input-field");
    const inputText = inputField.value;
    inputField.value = '';

    if (inputText == '') {
        const block = document.getElementById("bloc");
        block.style.display = 'block';
    }
    else {
        const block = document.getElementById("bloc");
        block.style.display = 'none';
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`

        fetch(url)
            .then(res => res.json())
            .then(data => showMeals(data.meals))
    }



}

const showMeals = food => {
    const searchResult = document.getElementById("search-result");
    searchResult.textContent = '';
    if (food == null) {
        const block = document.getElementById("block");
        block.style.display = 'block';
    }
    else {
        food.forEach(meal => {
            // console.log(meal);
            const block = document.getElementById("block");
            block.style.display = 'none';

            const div = document.createElement('div');
            div.classList.add('col');

            div.innerHTML = `
            <div onclick='loadMealDetail(${meal.idMeal})' class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 style='color:rgb(13, 182, 224)' class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                    </div>
                </div>
            `
            searchResult.appendChild(div);
        }
        )
    }

}

// const loadMealDetail = mealId => {
//     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayMealDetail(data.meals[0]));
// }

// const displayMealDetail = meal => {
//     console.log(meal);
//     const mealDetails = document.getElementById('meal-details');
//     mealDetails.textContent = '';
//     const div = document.createElement('div');
//     div.classList.add('card');
//     div.innerHTML = `
//     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//     <div class="card-body">
//         <h5 class="card-title">${meal.strMeal}</h5>
//         <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
//         <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
//     </div>
//     `;
//     mealDetails.appendChild(div);
// }