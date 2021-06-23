import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../contexts/AuthContext";
import axios from "axios";


function MyAccountPage() {
    const {
        authState: { user },
    } = useContext(authContext);
    const [content, setContent] = useState(null);
    // console.log("USER STUFF IN PROFILE:", user);

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
        <div className="page-wrapper">
            <div className="page-wrapper-inner">
                <h1>Profielpagina</h1>
                <section className="account-details">
                    <h2>Gegevens</h2>
                    <p>
                        <strong>Gebruikersnaam:</strong> {user && user.username}
                    </p>
                    <p>
                        <strong>Email:</strong> {user?.email}
                    </p>
                </section>
            </div>
        </div>
    );
}

export default MyAccountPage;
