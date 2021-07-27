import React, {useContext, useState, useEffect} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import "./My-account-page.css"
import {authContext} from "../../contexts/AuthContext";
import Button from "../../components/Button/Button";

export default function MyAccountPage() {
    const {user} = useContext(authContext);
    const [users, setUsers] = useState([]);
    const [submitSucces, toggleSubmitSucces] = useState(false);

    const history = useHistory();
    const toAddRecipe = () => {
        history.push("add-recipe")
    }

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
            setUsers(response.data.sort((a, b) => {
                    if(a.firstName < b.firstName) { return -1; }
                    if(a.firstName > b.firstName) { return 1; }
                    return 0;
                })
            )
        } catch (error) {
        }
    }

    useEffect(() => {
        fetchUsers();

    }, []);

    async function changeActiveStatus(user) {
        try {
            const response = await axios.put(`http://localhost:8080/users/${user.username}`, {
                enabled: !user.enabled,
            });
            toggleSubmitSucces(true);
        } catch (error) {
        }
    }

    useEffect(() => {
        if (submitSucces === true) {
            toggleSubmitSucces(false)
            fetchUsers();
        }
    }, [submitSucces])

    return (
        <>
            <div className="page-wrapper">
                <div className="page-wrapper-inner">
                    {user && user.authority === "ADMIN" ? (
                        <>
                            <h1>Manage users</h1>
                            <div className="user-list-wrapper">
                                <table className="user-list" key={user.username}>
                                    <thead>
                                    <tr className="table-headers">
                                        <th>Full name</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Enabled</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                {users && users.map(user => {
                                    return <tbody key={"user" + user.username}>
                                        <tr className="user-details-row">
                                            <td className="fullname">
                                                <p>
                                                    {user.firstName} {user.lastName}
                                                </p>
                                            </td>
                                            <td className="username">
                                                <p>
                                                    {user.username}
                                                </p>
                                            </td>
                                            <td className="email">
                                                <p>
                                                    {user.email}
                                                </p>
                                            </td>
                                            <td className="enabled">
                                                {user.enabled === true ?
                                                    <p className="active">
                                                        Active
                                                    </p>
                                                    :
                                                    <p className="inactive">
                                                        Inactive
                                                    </p>
                                                }
                                            </td>
                                            <td className="button">
                                                <Button
                                                    classNameButton="btn"
                                                    buttonTitle={user.enabled === true ? "Deactivate" : "Activate"}
                                                    onClickEvent={() => changeActiveStatus(user)}
                                                />
                                            </td>
                                        </tr>
                                        </tbody>
                                })}
                                </table>
                            </div>
                        </>
                    ) : (
                        <>
                            <h1>Welcome back
                                {user &&
                                    <>
                                    <span className="name-account-holder">
                                        {user.firstName}
                                    </span>
                                    <span className="name-account-holder">
                                        {user.lastName}
                                    </span>
                                    </>
                                }
                            </h1>
                            <Button
                                type="button"
                                onClickEvent={toAddRecipe}
                                buttonTitle="Add a new recipe"
                                classNameButton="btn"
                            />
                        </>
                    )}
                </div>
            </div>
        </>
    );
}