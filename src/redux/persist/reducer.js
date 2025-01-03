import { persistTypes } from "../user/types";
const initialState = {
  string: "",
  user: {},
  loading:false,
  theme: {
    bgColor: "#F5F5F5",
    primaryColor: "#2A8ED6",
    primaryTextColor: "#FAFAFA",
    secondaryTextColor: "#101010",
  },
};
 
const persistReducer = (state = initialState, action) => {
  switch (action.type) {
    case persistTypes.STRING:
      return { ...state, string: action.data };
    case persistTypes.USER_DATA:
      return { ...state, user: action.data };
    case persistTypes.LOADER:
      return { ...state, loading: action.data };
      case persistTypes.USER_DETAILS:
        return {...state, userDetails: action.data};
        case persistTypes.PORTFOLIO_DATA:
          return {...state, portfolioData: action.data};
    default:
      return state;
  }
};

export default persistReducer;
