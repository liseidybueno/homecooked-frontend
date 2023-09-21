import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { JSX } from "react/jsx-runtime";

library.add(faStar, faStarHalf);

export default function Recipe(props: {
  img: string;
  course: string;
  recipeName: string;
  recipeAuthor: string;
  cuisine: string;
  prepTime: string;
  rating: number;
}) {
  function roundToNearestHalfOrWhole(decimal: number) {
    // Get the decimal part of the number
    const decimalPart = decimal - Math.floor(decimal);

    // Determine whether to round up or down based on the decimal part
    let roundedDecimalPart;
    if (decimalPart < 0.25) {
      roundedDecimalPart = 0; // Round down to the nearest whole number
    } else if (decimalPart < 0.75) {
      roundedDecimalPart = 0.5; // Round to the nearest half number
    } else {
      roundedDecimalPart = 1; // Round up to the nearest whole number
    }

    // Calculate the rounded number
    const roundedNumber = Math.floor(decimal) + roundedDecimalPart;

    return roundedNumber;
  }

  function getStars(rating: number) {
    console.log(rating % 1 !== 0);

    let stars: JSX.Element[] = [];

    //if not a decimal, then return whole num of stars
    if (rating % 1 === 0) {
      stars.length = rating;
      stars.fill(
        <FontAwesomeIcon icon={faStar} style={{ color: "#fff70f" }} />
      );
      return stars;
    }

    //if it's a decimal, round to the nearest half or whole
    const nearestNum = roundToNearestHalfOrWhole(rating);
    for (var i = 0; i < Math.trunc(nearestNum); i++) {
      stars.push(
        <span>
          <FontAwesomeIcon icon={faStar} style={{ color: "#fff70f" }} />
        </span>
      );
    }
    if (nearestNum % 1 !== 0) {
      stars.push(
        <FontAwesomeIcon icon={faStarHalf} style={{ color: "#fff70f" }} />
      );
    }

    return stars;
  }

  return (
    <div className="recipe-box">
      <div className="recipe-rating">{getStars(props.rating)}</div>
      <img className="recipe-box-img" src={props.img} />
      <div className="recipe-info">
        <h3 className="recipe-box-course">{props.course}</h3>
        <h2 className="recipe-box-name">{props.recipeName}</h2>
        <p className="recipe-box-author">{props.recipeAuthor}</p>
        <div className="recipe-box-cuisine-prep">
          <span>{props.cuisine}</span>
          <span>{props.prepTime}</span>
        </div>
      </div>
    </div>
  );
}
