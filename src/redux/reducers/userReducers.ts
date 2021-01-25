import { UserAction } from "../actions";
import { UserModel, UserState } from "../models";
import { Address } from "cluster";
import { State } from "react-native-gesture-handler";
import { ActionSheetIOS } from "react-native";

const initialState: UserState = {
  user: {} as UserModel,
  location: {} as Address,
  error: undefined
};

const UserReducers = (state: UserState = initialState, action: UserAction) => {
  switch (action.type) {
    case "ON_UPDATE_LOCATION":
      return { ...state, location: action.payload };
    default:
      return state;
  }
};

export { UserReducers };
