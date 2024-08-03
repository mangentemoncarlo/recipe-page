const Nutrition = () => {
    return (
        <div className="recipe__nutrition">
            <h2 className="recipe__nutrition--title">Nutrition</h2>
            <p className="recipe__nutrition--text">The table below shows nutritional values per serving without the additional fillings.</p>
            <table className="recipe__nutrition--table">
                <tr>
                    <td>Calories</td>
                    <td className="nutrition__value">277kcal</td>
                </tr>
                <tr>
                    <td>Carbs</td>
                    <td className="nutrition__value">0g</td>
                </tr>
                <tr>
                    <td>Protein</td>
                    <td className="nutrition__value">20g</td>
                </tr>
                <tr>
                    <td>Fat</td>
                    <td className="nutrition__value">22g</td>
                </tr>
            </table>
        </div>
    )
}

export default Nutrition;