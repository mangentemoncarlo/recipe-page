const Instructions = () => {
    return (
        <div className="recipe__instructions">
            <h2 className="recipe__instructions--title">Instructions</h2>
            <ol>
                <li>Beat the eggs: <span className="recipe__instructions--text">In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture. </span></li>
                <li>Heat the pan: <span className="recipe__instructions--text">Place a non-stick frying pan over medium heat and add butter or oil.</span></li>
                <li>Cook the omelette: <span className="recipe__instructions--text">Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</span></li>
                <li>Add fillings (optional): <span className="recipe__instructions--text">When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</span></li>
                <li>Fold and serve: <span className="recipe__instructions--text">As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</span></li>
                <li>Enjoy: <span className="recipe__instructions--text">Serve hot, with additional salt and pepper if needed.</span></li>
            </ol>
        </div>
    )
}

export default Instructions;