import './Style-page.css'
import Recipe from "../../components/Recipe/Recipe";
import AddDirections from "../../components/AddDirections/AddDirections";


function StylePage() {

    return (
        <div className="page-wrapper">
            <div className="page-wrapper-inner">
                <h1>Deze pagina is om nieuwe elementen te bouwen</h1>
                <AddDirections />
            </div>
        </div>
    )
}

export default StylePage;