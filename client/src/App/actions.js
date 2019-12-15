import {changeStoreState} from "../helpers/utils";
import {Constants} from "./constants";

export const openAction = () => {
    return dispatch => {
        dispatch(changeStoreState(Constants.OPEN_REG_DIALOG,''));
    }
};
export const closeAction = () => {
    return dispatch => {
        dispatch(changeStoreState(Constants.CLOSE_REG_DIALOG,''));
    }
};
