import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  accountReducer: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
