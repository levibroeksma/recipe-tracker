import "./Recipe-page.css"
import "../../components/Recipe/Recipe.css"
import axios from "axios";
import {useEffect, useState} from "react";
import ReactPaginate from 'react-paginate';
import {Link} from "react-router-dom";
import RecipeImage from "../../components/Recipe/RecipeImage";
import cookTime from "../../assets/clock.png";

export default function RecipePage() {
    // Pagination states
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(20);
    const [pageCount, setPageCount] = useState(0)

    // Fetch all recipes with pagination
    async function fetchAllRecipes() {
        try {
            const response = await axios.get(`http://localhost:8080/api/recipes`);
            const data = response.data;
            const slice = data.slice(offset, offset + perPage)


            setData(slice);
            setPageCount(Math.ceil(data.length / perPage));
        } catch (error) {}
    }

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage +1);
    }

    useEffect(()=>{
        fetchAllRecipes();
    },[offset])

    return (

        <div className="page-wrapper">
            <div className="page-wrapper-inner">
                <h1>Recipe's</h1>
                <div className="recipe-page-wrapper">
                    {data && data.map((recipe) => {
                        return <section className="recipe-holder" key={recipe.id}>
                            <Link to={`recipes/${recipe.id}`} className="recipe-link">
                                <div className="img-holder">
                                    <RecipeImage
                                        recipeId={recipe.id}
                                    />
                                </div>
                                <div className="spec-holder">
                                    <div className="country-holder">
                                        {recipe.country !== "" ?
                                            (<img src={require(`../../assets/flags/${recipe.country}.png`).default}
                                                  alt={recipe.country}/>)
                                            :
                                            (<img src="//via.placeholder.com/60x60" alt="placeholder"/>)}
                                        <span>{recipe.country}</span>
                                    </div>
                                    <div className="prep-time-holder">
                                        <img src={cookTime} alt="prep time"/>
                                        <span>{recipe.cookingtime} min</span>
                                    </div>
                                </div>
                                <div className="text-holder">
                                    <h2>{recipe.title}</h2>
                                    <p>{recipe.description}</p>
                                </div>
                            </Link>
                        </section>
                    })
                    }

                </div>
                <div className="pagination-wrapper">
                    <ReactPaginate
                        previousLabel={"prev"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}/>
                </div>
            </div>
        </div>
    )
}
