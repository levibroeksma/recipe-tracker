import "./AddIngredients.css"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FaEraser} from "react-icons/fa";
import Button from "../Button/Button";
import {useState} from "react";

function AddIngredients() {

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
        <div className="general-flex-container">
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
                        <div className='item-container' key={"container" + index}>
                            <div className='item'>
                                <span>{item.itemName}</span>
                            </div>
                            <button className='eraser'onClick={() => eraseLine(index)} >
                                <FaEraser className="eraserIcon"/>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AddIngredients;