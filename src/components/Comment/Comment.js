import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

import "./Comment.css"
function Comment() {

    const star = <FontAwesomeIcon icon={faStar}/>
    return(
        <>
            <section className="comment-holder">
                <div className="text-holder">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus amet aperiam aspernatur deserunt dolorem et impedit ipsum magnam nemo, neque, placeat provident quaerat saepe, temporibus ullam veniam vero? Sed!</p>
                </div>
                <div className="bottom-wrap">
                    <div className="account-comment-holder">
                        <div className="account-comment-image">
                            <img src="//via.placeholder.com/60x60" alt=""/>
                        </div>
                        <div className="account-comment-text">
                            <h3>Jillis de Boom</h3>
                            <span>Beunhaas</span>
                        </div>
                    </div>
                    <div className="rating">
                        <div className="star-holder">
                            {star}{star}{star}{star}{star}
                        </div>
                        <span>1 week ago</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Comment;