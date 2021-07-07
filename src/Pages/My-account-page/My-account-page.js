import React, { useContext, useState, useEffect } from "react";
import { authContext } from "../../contexts/AuthContext";
import axios from "axios";
import "./My-account-page.css"
import Button from "../../components/Button/Button";
import api from "../../api/http-common"

import {useHistory} from "react-router-dom";

function MyAccountPage() {
    const { user } = useContext(authContext);
    const [users, setUsers] = useState([]);
    const history = useHistory();
    const [currentUser, setCurrentUser] = useState(user.username);

    // const retrieveUsers = async () => {
    //     const response = await api.get("/users")
    //     return response.data
    // }
    //
    // const updateAccountStatus = async (user) => {
    //     const response = await api.put(`/users/${user.username}`, user)
    //     const {enabled} = response.data.enabled;
    //     setUsers(users.map(user => {
    //         return user.enabled = !enabled;
    //     }))
    // };

    const handleName = currentUser => {
        return <h1>{currentUser.firstName} + {currentUser.lastName}</h1>
    }

    const toAddRecipe = () => {
        history.push("add-recipe")
    }

    useEffect(() => {
        async function fetchUsers() {
            try {

                const token = localStorage.getItem("token");
                const response = await axios.get(
                    `http://localhost:8080/users`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setUsers(response.data)
            } catch (error) {}
        }
        async function fetchCurrentUserDetails() {
            try {
                const response = await axios.get(`http://localhost:8080/users/${user.username}`);
                setCurrentUser(response.data)
            } catch (error) {}
        }
        // const getAllUsers = async () => {
        //     const allUsers = await retrieveUsers();
        //     if(allUsers) setUsers(allUsers);
        // }
        fetchUsers();
        fetchCurrentUserDetails();
        // getAllUsers();
    }, []);

    return (
        <>
            <div className="page-wrapper">
                <div className="page-wrapper-inner">
            {user.authority === "USER" ? (
                <>
                    <h1>Welcome back <span className="name-account-holder">{currentUser.firstName} {currentUser.lastName}</span></h1>
                    <Button
                        type="button"
                        onClickEvent={toAddRecipe}
                        buttonTitle="Add a new recipe"
                        classNameButton="btn"
                    />
                </>
            ) :
                (
                    <></>
                )
            }
            {user.authority === "ADMIN" ? (
             <>
                <h1>Manage users</h1>
                <div className="user-list-wrapper">
                     {users.map(user => {
                        return <>
                                <table className="user-list" key={user.email} >
                                    <div className="user-wrapper" key={user.username}>
                                         <tr className="table-headers">
                                             <th key={user.username + "Fn"}>Full name</th>
                                             <th key={user.username + "Un"}>Username</th>
                                             <th key={user.username + "Em"}>Email</th>
                                             <th key={user.username + "En"}>Enabled</th>
                                             <th></th>
                                         </tr>
                                         <tr>
                                            <td className="fullname"><p>{user.firstName} {user.lastName}</p></td>
                                            <td className="username"><p>{user.username}</p></td>
                                            <td className="email"><p>{user.email}</p></td>
                                            <td className="enabled">{user.enabled === true ? <p className="active">Active</p> : <p className="inactive">Inactive</p>}</td>
                                            <td className="button">
                                                {user.enabled === true ?
                                                    <Button
                                                        classNameButton="btn"
                                                        buttonTitle="Deactivate"
                                                        // onClickEvent={updateAccountStatus({user})}
                                                    /> :
                                                    <Button
                                                        classNameButton="btn"
                                                        buttonTitle="Activate"
                                                    />}
                                            </td>
                                         </tr>
                                    </div>
                                </table>

                        </>
                     })}
                </div>
             </>
            ) : (
                <></>
            )}
                </div>
            </div>
        </>
    );
}

export default MyAccountPage;
