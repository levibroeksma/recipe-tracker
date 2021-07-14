import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const authContext = createContext({});


export default function AuthContextProvider({children}) {
    const [authState, setAuthState] = useState({
        user: null,
        status: "pending"
    });

    const history = useHistory();

    function isTokenValid() {
        const jwtToken = localStorage.getItem('token');
        if(!jwtToken) return false;
        const decodedToken = jwt_decode(jwtToken);
        const expirationUnix = decodedToken.exp;
        const now = new Date().getTime();
        const currentUnix = Math.round(now / 1000);
        const isTokenStillValid = expirationUnix - currentUnix > 0;

        return isTokenStillValid;
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if(!authState.user && isTokenValid()) {
            const decodedToken = jwt_decode(token);

            fetchUserData(token, decodedToken.sub);

        } else {
            setAuthState({
                user: null,
                status: 'done',
            });
        }
    },[]);

    function login(jwtToken) {
        localStorage.setItem('token', jwtToken);
        const decodedToken = jwt_decode(jwtToken);
        const userId = decodedToken.sub;
        fetchUserData(jwtToken, userId);
    }

    async function fetchUserData(token, id) {
        try {
            const result = await axios.get(`http://localhost:8080/authenticated`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            setAuthState({
                user: {
                    username: result.data.name,
                    authority: result.data.authorities[0].authority,
                    country: result.data.country
                },
                status: 'done',
            });
            // history.push('/my-account');
        } catch(e) {
            console.error(e);
        }
    }

    function logout() {
        localStorage.removeItem("token");
        setAuthState({user: null, status: "done"});
        history.push("/");
    }

    const data = {
        ...authState,
        login: login,
        logout: logout,
        isTokenValid: isTokenValid,
    };

    return (
        <authContext.Provider value={data}>
            {authState.status === 'pending'
                ? <p>Loading...</p>
                : children
            }
        </authContext.Provider>
    );
}