import { searchConstants } from "./constants";

const initialState = {
   patients: [],
   prescriptions: [],
};

const patientReducer = (state = initialState, action) => {
    switch (action.type) {
        case searchConstants.LOAD_REPORTS :
            return {
                ...state,
                patients: action.payload,
            };
        case searchConstants.LOAD_PRESCRIPTION :
            return {
                ...state,
                prescriptions: action.payload,
            };
        default:
            return state;
    }
};

export default patientReducer;
