import { combineReducers } from "redux";
import { ShoppingReducers } from "./shoppingReducers";
import { UserReducers } from "./userReducers";

const rootReducer = combineReducers({
  userReducers: UserReducers,
  shoppingReducers: ShoppingReducers
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export { rootReducer };
