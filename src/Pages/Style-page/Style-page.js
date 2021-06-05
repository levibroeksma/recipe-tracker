import './Style-page.css'
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FaEraser } from "react-icons/fa";
import Button from "../../components/Button/Button";

function StylePage() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const handlePlusButtonClick = () => {
        const newItem = {itemName: inputValue}
        const newItems = [...items, newItem];
        setItems(newItems);
        setInputValue("");

    };
    const uploadOnEnter = (e) => {
        if(e.key === "Enter") {
            const newItem = {itemName: inputValue}
            const newItems = [...items, newItem];
            setItems(newItems);
            setInputValue("");
        }
    };
    const eraseLine = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems)
    }
    return (
        <div className="page-wrapper">
            <div className="page-wrapper-inner">
                <h1>Deze pagina is om nieuwe elementen te bouwen</h1>
                    <div className='ingredient-container'>
                        <h2>Add ingredients</h2>
                        <div className='add-item-box'>
                            <input
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className='add-item-input'
                                placeholder='Add an ingredient...'
                                onKeyDown={uploadOnEnter}
                            />
                            <button className="plusButton"onClick={() => handlePlusButtonClick()} >
                              <FontAwesomeIcon icon={faPlus}/>
                            </button>
                        </div>

                    </div>
                    <div className="ingredient-container ingredients-list">
                        <div className='item-list'>
                            {items.map((item, index) =>
                                <div className='item-container'>
                                    <div className='item-name'>
                                        <span>{item.itemName}</span>
                                    </div>
                                    <button className='eraser'onClick={() => eraseLine(index)} >
                                        <FaEraser className="eraserIcon"/>
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className="save-button">
                            <Button
                                type="submit"
                                buttonTitle="Save"
                                classNameButton="btn"
                            />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default StylePage;