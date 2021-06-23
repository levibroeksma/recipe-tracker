import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const authContext = createContext({});

function AuthContextProvider({children}) {
    const history = useHistory();
    const [authState, setAuthState] = useState({ user: null, status: "pending" });

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            login(token);
        } else {
            setAuthState({ user: null, status: "done" });

        }
    }, []);

    async function getUserData(id, token) {
        setAuthState({ user: null, status: "pending" });
        try {
            const response = await axios.get(
                `http://localhost:3000/600/users/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setAuthState({ user: response.data, status: "done" });

        } catch (error) {}
    }

    async function login(token) {
        localStorage.setItem("token", token);
        const dataFromToken = jwt_decode(token);
        const userId = dataFromToken.sub;

        getUserData(userId, token);
    }

    function logout() {
        // @todo
        localStorage.removeItem("token");
        setAuthState({ user: null, status: "done" });
        history.push("/");
    }

    const data = { authState: authState, login: login, logout: logout };

    return (
        <authContext.Provider value={data}>
            {authState.status === "pending" && <h1>Fetching you data! Hold on</h1>}
            {authState.status === "done" && children}
        </authContext.Provider>
    );
}

export default AuthContextProvider;