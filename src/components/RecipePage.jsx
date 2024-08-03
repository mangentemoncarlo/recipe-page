import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Nutrition from "./Nutrition";
import Recipe from "./Recipe";

const RecipePage = () => {
    return (
        <main className="recipe">
            <Recipe />
            <Ingredients />
            <Instructions />
            <Nutrition />
        </main>
    )
}

export default RecipePage;