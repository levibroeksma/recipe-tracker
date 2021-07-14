import {Route, Redirect} from "react-router-dom"
import {useContext} from "react";
import {authContext} from "../../contexts/AuthContext";

export default function ProtectedRoute({component: Component, ...rest}) {
    const {isTokenValid} = useContext(authContext);
    return (
        <Route
            {...rest}
            render={props => {
                if (isTokenValid()) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/sign-in",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
}