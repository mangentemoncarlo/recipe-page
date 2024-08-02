import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Nutrition from "./Nutrition";
import Recipe from "./Recipe";

const RecipePage = () => {
    return (
        <div className="recipe">
            <Recipe />
            <Ingredients />
            <Instructions />
            <Nutrition />
        </div>
    )
}

export default RecipePage;