import { Constants } from "../constants/constants";

const initialState = {
  isLoading: false,
  path: "",
  message: "",
  flag: false,
  notificationType: ""
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.CLEAR:
      return {
        ...state,
        flag: false
      };
    case Constants.SHOW_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case Constants.SUCCESS:
      return {
        ...state,
        flag: true,
        message: action.payload,
        notificationType: "success"
      };
    case Constants.ERROR:
      return {
        ...state,
        flag: true,
        message: action.payload,
        notificationType: "danger"
      };
    case Constants.CLOSE_LOADING:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default appReducer;
