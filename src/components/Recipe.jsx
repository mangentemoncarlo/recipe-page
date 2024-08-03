import Omellete from "../assets/images/image-omelette.jpeg";

const Recipe = () => {
    return (
        <div className="recipe__header">
            <img src={Omellete} alt="Image Omelette" className="recipe__image" />
            <div className="recipe__content">

                <h1 className="recipe__name">Simple Omelette Recipe</h1>
                <p className="recipe__text">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
                <div className="recipe__prep">
                    <h3 className="recipe__prep--title">Preparation time</h3>
                    <ul>
                        <li>Total: <span className="recipe__prep--text">Approximately 10 minutes</span></li>
                        <li>Preparation: <span className="recipe__prep--text">5 minutes</span></li>
                        <li>Cooking: <span className="recipe__prep--text">5 minutes</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Recipe;