import "./Recipe-page.css"
import Comment from "../../components/Comment/Comment";
import RecipeDetail from "../../components/Recipe-detail/Recipe-detail";
import LeaveComment from "../../components/Leave-comment/Leave-comment"
function RecipePage() {
    return (
        <div className="page-wrapper">
            <div className="page-wrapper-inner">
                <h1>Recipe's</h1>

                <LeaveComment/>

                <RecipeDetail />
                <div className="comment-wrapper">
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
            </div>
        </div>
    )
}

export default RecipePage;