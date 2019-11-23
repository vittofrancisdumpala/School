import {loginConstants} from "./constants"
import {changeStoreState} from "../../helpers/utils";
import axios from "axios";
import {Constants} from "../../constants/constants";

export const loginAction = (email, password, history) => {
    return dispatch => {
        let user = {};
        user.email = email;
        user.password = password;
        return axios
            .post("/api/auth/login", user)
            .then(response => {
                console.log(response);
                 if(response.status === 200 && response.data.user){
                     dispatch(
                         changeStoreState(loginConstants.USER_IS_AUTHENTICATED, response)
                     );
                     history.push("/dashboard");
                 }
            })
            .catch(error => {
                dispatch(changeStoreState(loginConstants.LOGIN_ERROR, error.toString()));
            });
    };
};

export const logoutAction = history => {
    return dispatch => {
        dispatch(changeStoreState(loginConstants.LOGOUT, ""));
        console.log(history);
        history.push("/");
    };
};
