import "./Recipe-page.css"
import axios from "axios";
import {useEffect, useState} from "react";
import Recipe from "../../components/Recipe/Recipe";
import ReactPaginate from 'react-paginate';

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

            const recipeData = slice.map(recipe =>
                <Recipe
                    key={recipe.id}
                    title={recipe.title}
                    preptime={recipe.cookingtime}
                    description={recipe.description}
                    country={recipe.country}
                    link={`recipes/${recipe.id}`}
                />
            )
            setData(recipeData);
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
                    {data}
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
        </div>
    )
}
