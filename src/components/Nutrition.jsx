const Nutrition = () => {
    return (
        <div className="recipe__nutrition">
            <h2 className="recipe__nutrition--title">Nutrition</h2>
            <p className="recipe__nutrition--text">The table below shows nutritional values per serving without the additional fillings.</p>
            <table className="recipe__nutrition--table">
                <tbody>
                    <tr>
                        <td>Calories</td>
                        <td>277kcal</td>
                    </tr>
                    <tr>
                        <td>Carbs</td>
                        <td>0g</td>
                    </tr>
                    <tr>
                        <td>Protein</td>
                        <td>20g</td>
                    </tr>
                    <tr>
                        <td>Fat</td>
                        <td>22g</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Nutrition;