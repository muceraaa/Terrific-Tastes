const createMealInfoDiv = (meal, mealInput) => {
    const mealPhoto = meal.strMealThumb;
    const mealName = meal.strMeal;
    const mealInfo = `
    <a href="#meal-details-section" style="text-decoration: none; color: black;">
        <div onclick="getMealDetails(${meal.idMeal})" class="card border-0 shadow cursor" style="width: 18rem; border-radius: 10px">
            <img src="${mealPhoto}" class="card-img-top" style="width: 18rem; border-radius: 10px 10px 0 0" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center">${mealName}</h5>
            </div>
        </div>
    </a>
    `
    const mealInfoSection = document.getElementById('meal-info-section');
    const mealInfoDiv = document.createElement('div');
    mealInfoDiv.className = 'col-xm-1 col-sm-1 col-md-3 p-3 d-flex justify-content-center';
    mealInfoDiv.innerHTML = mealInfo;
    mealInfoSection.appendChild(mealInfoDiv);
}

const showMealInfoDiv = (data, mealInput) => {
const meal = data.meals;


// Checking if the meal is accessible or not
if(meal){
    meal.forEach(element => {
    createMealInfoDiv(element, mealInput);
    });
}
else{
    const noMealFound = document.getElementById('no-meal-found');
    noMealFound.innerText = `No meal found for ${mealInput}!`;
}
}

