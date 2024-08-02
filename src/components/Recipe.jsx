import Omellete from "../assets/images/image-omelette.jpeg";

const Recipe = () => {
    return (
        <div>
            <img src={Omellete} alt="Image Omelette" className="recipe__image" />
            <h1 className="recipe__name">Simple Omelette Recipe</h1>
            <p className="recipe__text">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
            <div className="recipe__prep">
                <h3 className="recipe__prep--title">Preparation time</h3>
                <ul>
                    <li><span>Total: </span>Approximately 10 minutes</li>
                    <li><span>Preparation: </span>5 minutes</li>
                    <li><span>Cooking: </span>5 minutes</li>
                </ul>
            </div>
        </div>
    )
}

export default Recipe;