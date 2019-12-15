import {loginConstants} from "./constants"
import {changeStoreState} from "../../helpers/utils";
import axios from "axios";
import { enqueueSnackbar, closeSnackbar } from '../../components/Notiification/actions';
import IconButton from '@material-ui/core/IconButton';
import React from "react";
import CloseIcon from '@material-ui/icons/Close';


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
                     dispatch(enqueueSnackbar({
                         message: 'Logged in  Successfully.',
                         options: {
                             variant: 'success',
                             action: key => (
                                 <IconButton  onClick={() => dispatch(closeSnackbar(key))}>
                                     <CloseIcon />
                                 </IconButton >
                             ),
                         },
                     }));
                     dispatch(
                         changeStoreState(loginConstants.USER_IS_AUTHENTICATED, response.data.user)
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
