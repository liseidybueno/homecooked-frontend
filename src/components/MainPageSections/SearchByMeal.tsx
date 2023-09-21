import searchByMeal from "../../mocks/search-by-meal.json";

export default function SearchByMeal() {
  return (
    <section className="search-by-meal-section">
      <h2 className="h2">Search by Meal</h2>
      <div className="search-by-meal-meals">
        {searchByMeal.searchByMeal.map((meal) => {
          return (
            <div key={meal.meal} className="meal-div">
              <img className="meal-div-img" src={meal.img} />
              <h3 className="meal-div-text">{meal.meal}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
