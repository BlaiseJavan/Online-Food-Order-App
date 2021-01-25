import { Address } from "expo-location";

// category
export interface Category {
  title: String;
  icon: String;
}

// Food model
export interface FoodModel {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  readyTime: number;
  image: [string];
}

// Restaurant model
export interface Restaurant {
  _id: string;
  name: string;
  foodType: string;
  address: string;
  phone: number;
  images: string;
  foods: [FoodModel];
}

export interface FoodAvailability {
  category: [Category];
  restaurants: [Restaurant];
  foods: [FoodModel];
}

// User model
export interface UserModel {
  firstName: string;
  lastName: string;
  contactNumber: string;
  token: string;
}

export interface UserState {
  user: UserModel;
  location: Address;
  error: string | undefined;
}

export interface ShoppingState {
  availability: FoodAvailability;
}
