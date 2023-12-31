import Recipe from "./MainPageSections/Recipe";
import topRecipes from "../mocks/top-recipes.json";
import SearchByMeal from "./MainPageSections/SearchByMeal";
import Button from "../components/Button";

export default function MainPage() {
  function formatTime(time: number) {
    const hours = Math.floor(time / 60);
    const minutes = time - hours * 60;

    let formattedHours;
    let formattedMinutes = minutes > 0 ? `${minutes} min` : ``;

    if (hours === 1) {
      formattedHours = `${hours} hr`;
    } else if (hours > 1) {
      formattedHours = `${hours} hrs`;
    } else {
      formattedHours = ``;
    }

    return `${formattedHours} ${formattedMinutes}`;
  }

  return (
    <>
      <section className="main-page--background">
        <div className="main-page--rectangle">
          <div className="main-page--main-text">
            <h1 className="h1">Browse & create recipes</h1>
            <p className="paragraph main-page--paragraph">
              Browse and save recipes from cooks all over the world. Create and
              share your own recipes easily with a database of ingredients. Set
              up your profile with all your recipes in one place - making it
              super simple to set up an online recipe book!
            </p>
            <div className="main-page--butons">
              <Button className="tertiary-button tertiary-btn-dark">
                Search Recipes
              </Button>
              <Button className="tertiary-button tertiary-btn-light">
                Create a Recipe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="top-recipes">
        <h2 className="h2">Top Recipes</h2>
        <div className="recipes-cards">
          {topRecipes.recipes.map((recipe) => {
            return (
              <Recipe
                course={recipe.course}
                img={recipe.img}
                recipeName={recipe.recipeName}
                recipeAuthor={recipe.recipeName}
                cuisine={recipe.cuisine}
                prepTime={formatTime(recipe.totalTime)}
                rating={recipe.rating}
              />
            );
          })}
        </div>
      </section>

      <section className="search-by-meal">
        <SearchByMeal />
      </section>
    </>
  );
}
