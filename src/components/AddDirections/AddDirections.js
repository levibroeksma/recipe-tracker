// import {useState} from "react";
// import {BsTrashFill} from "react-icons/bs";
// import Button from "../Button/Button";
// import "./AddDirection.css"
//
// function AddDirections() {
//     const [directions, setDirections] = useState([]);
//     const [inputValue, setInputValue] = useState("");
//     const handlePlusButtonClick = () => {
//         const newDirection = {direction: inputValue};
//         const newDirections = [...directions, newDirection];
//         setDirections(newDirections);
//         setInputValue("");
//     };
//     const uploadOnEnter = (e) => {
//         if(e.key === "Enter") {
//             const newDirection = {direction: inputValue};
//             const newDirections = [...directions, newDirection];
//             setDirections(newDirections);
//             setInputValue("");
//         }
//     };
//     const eraseLine = (index) => {
//         const newDirections = [...directions];
//         newDirections.splice(index, 1);
//         setDirections(newDirections);
//     }
//     return (
//
//         <>
//             <div className="general-flex-container">
//                 <div className='direction-container'>
//                     <h2>Add your directions</h2>
//                     <div className='add-direction-box'>
//                             <textarea
//                                 value={inputValue}
//                                 onChange={(e) => setInputValue(e.target.value)}
//                                 className='add-item-textarea'
//                                 placeholder='Add an direction...'
//                                 onKeyDown={uploadOnEnter}
//                             />
//                         <div className="button-holder">
//                             <button className="btn" onClick={() => handlePlusButtonClick()} >
//                                 Add
//                             </button>
//                         </div>
//                     </div>
//
//                 </div>
//                 <div className="direction-container direction-list">
//                     <ol className='item-list'>
//                         {directions.map((direction, index) =>
//                             <div className='item-container' key={"container" + index}>
//                                 <li className='item-name'>
//                                     <span>{direction.direction}</span>
//                                 </li>
//                                 <button className='eraser'onClick={() => eraseLine(index)} >
//                                     <BsTrashFill className="eraserIcon"/>
//                                 </button>
//                             </div>
//                         )}
//                     </ol>
//                     <div className="save-button">
//                         <Button
//                             type="submit"
//                             buttonTitle="Save"
//                             classNameButton="btn"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
//
// export default AddDirections;