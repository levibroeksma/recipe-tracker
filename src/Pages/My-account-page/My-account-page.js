import React, { useContext, useState, useEffect } from "react";
import { authContext } from "../../contexts/AuthContext";
import axios from "axios";
import "./My-account-page.css"
import Button from "../../components/Button/Button";
import Recipe from "../../components/Recipe/Recipe";

import {useHistory} from "react-router-dom";

function MyAccountPage() {
    const {
        authState: { user },
    } = useContext(authContext);
    const [content, setContent] = useState(null);
    console.log("USER STUFF IN PROFILE:", user);

    const history = useHistory();

    const toAddRecipe = () => {
        history.push("add-recipe/step-1")
    }

    useEffect(() => {
        async function fetchPrivateData() {
            // console.log("FETCH DATA IN PROFILE");
            try {
                const token = localStorage.getItem("token");
                // console.log(token);
                const response = await axios.get(
                    "http://localhost:3000/660/private-content",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                // console.log("WAT IS IN THIS RESPONSE?", response);
                setContent(response.data);
            } catch (error) {}
        }

        fetchPrivateData();
    }, []);

    // console.log("WHAT IS CONTENT??", content);

    return (
        <>
            <div className="page-wrapper">
                <div className="page-wrapper-inner">
                    <h1>Welcome back <span className="name-account-holder">{user && user.firstName} {user && user.lastName}</span></h1>
                    <Button
                        type="button"
                        onClickEvent={toAddRecipe}
                        buttonTitle="Add a new recipe"
                        classNameButton="btn"
                    />
                    {/*<section className="account-details">*/}
                    {/*    <h2>Account details</h2>*/}
                    {/*    <div className="detail-titles">*/}
                    {/*        <h5>Username</h5>*/}
                    {/*        <h5>Email</h5>*/}
                    {/*    </div>*/}
                    {/*    <div className="detail-content">*/}
                    {/*        <p>{user?.username}</p>*/}
                    {/*        <p>{user?.email}</p>*/}
                    {/*    </div>*/}
                    {/*</section>*/}
                </div>
            </div>
            <div className="page-wrapper blue">
                <div className="page-wrapper-inner left">
                    <h2>My recipe's</h2>
                    <div className="my-recipe-wrapper">
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                    </div>
                </div>
            </div>
            <div className="page-wrapper">
                <div className="page-wrapper-inner left">
                    <h2>My favorites</h2>
                    <div className="my-recipe-wrapper">
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30 minutes"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30 minutes"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30 minutes"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30 minutes"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30 minutes"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyAccountPage;
