import axios from "axios";
import {searchConstants} from "./constants"
import {changeStoreState} from "../../helpers/utils";

export const loadPatientRecords = () => {
    return dispatch => {
        return axios
            .get("/api/client/")
            .then(response => {
                    console.log(response);
                    let records= response.data.patients;
                    dispatch(changeStoreState(searchConstants.LOAD_REPORTS,records));
            })
            .catch(error => {
            });
    }
};