import Comment from "../components/Comment/Comment";
import RecipeDetail from "../components/Recipe-detail/Recipe-detail";

function RecipePage() {
    return (
        <div className="page-wrapper">
            <div className="page-wrapper-inner">
                <h1>Recipe's</h1>
                <Comment />

                <RecipeDetail />

            </div>
        </div>
    )
}

export default RecipePage;