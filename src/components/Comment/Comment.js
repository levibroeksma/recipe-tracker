import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import "./Comment.css"
import {useContext} from "react";
import {authContext} from "../../contexts/AuthContext";
import Button from "../Button/Button";
import {FaTrash} from "react-icons/fa"

export default function Comment({comment, username}) {
    const {user, isTokenValid} = useContext(authContext);
    const star = <FontAwesomeIcon icon={faStar}/>

    return(
        <>
            <section className="comment-holder">
                    {user.authority === "ADMIN" && isTokenValid() ?
                        (<div className="delete-button">
                            <Button
                                type="submit"
                                buttonTitle={<FaTrash/>}
                                classNameButton="btn delete-comment"
                            />
                        </div>
                        ) :
                        (<></>)
                    }
                <div className="text-holder">
                    <p>{comment}</p>
                </div>
                <div className="bottom-wrap">
                    <div className="account-comment-holder">
                        <div className="account-comment-image">
                            <img src="//via.placeholder.com/60x60" alt=""/>
                        </div>
                        <div className="account-comment-text">
                            <h3>{username}</h3>
                        </div>
                    </div>
                    <div className="rating">
                        <div className="star-holder">
                            {star}{star}{star}{star}{star}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}