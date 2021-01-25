import { Dispatch } from "react";
import { BASE_URL } from "../../utils";
import { FoodAvailability } from "../models";
import axios from "axios";

export interface AvalabilityAction {
  readonly type: "ON_AVALABILITY";
  payload: FoodAvailability | string;
}

export interface ShoppingErrorAction {
  readonly type: "ON_SHOOPING_ERROR";
  payload: any;
}

export type ShoppingAction = AvalabilityAction | ShoppingErrorAction;

// user actions trigger from components

export const onAvailability = (postCode: string) => {
  return async (dispatch: Dispatch<ShoppingAction>) => {
    try {
      const response = await axios.get<FoodAvailability>(
        `${BASE_URL}/food/availability/${postCode}`
      );

      if (!response) {
        dispatch({
          type: "ON_AVALABILITY",
          payload: "Availability error"
        });
      } else {
        // save our location in local storage
        dispatch({
          type: "ON_AVALABILITY",
          payload: response.data
        });
      }
    } catch (error) {
      dispatch({
        type: "ON_SHOOPING_ERROR",
        payload: error
      });
    }
  };
};
