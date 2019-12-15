import { searchConstants } from "./constants";

const initialState = {
   patients: [],
};

const patientReducer = (state = initialState, action) => {
    switch (action.type) {
        case searchConstants.LOAD_REPORTS :
            return {
                ...state,
                patients: action.payload,
            };
        default:
            return state;
    }
};

export default patientReducer;
