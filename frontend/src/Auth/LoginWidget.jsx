import { Redirect } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react/bundles/types";
import { Spinner } from "../layouts/utils/Spinner";

const LoginWidget = ({ config }) => {
    const { oktaAuth, authState } = useOktaAuth();

    const onSuccess = (tokens) => {
        oktaAuth.handleLoginRedirect(tokens);
    };

    const onError = (err) => {
        console.log("Sign in error: ", err);
    }

    if (!authState) {
        return <Spinner/>;
    }

    return authState.isAuthenticated ? 
    <Redirect to={{ pathname: '/' }} />
    :
    <div></div>
}

export default LoginWidget;