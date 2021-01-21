import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import LandingScreen from "./src/screens/LandingScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeSreen from "./src/screens/HomeSreen";

const switchNavigator = createSwitchNavigator({
  landingStack: {
    screen: createStackNavigator(
      {
        Landing: LandingScreen
        // Search address screen
      },
      {
        DefaulfNavigationOptions: {
          HeaderShown: false
        }
      }
    )
  },
  homeStack: createBottomTabNavigator({
    // HOme tab Icon
    home: {
      screen: createStackNavigator({
        HomePage: HomeSreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon =
            focused == true
              ? require("./src/images/home_icon.png")
              : require("./src/images/home_n_icon.png");
          return <Image source={icon} style={styles.tabIcon} />;
        }
      }
    },
    // offer tab Icon
    Offer: {
      screen: createStackNavigator({
        OfferPage: HomeSreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon =
            focused == true
              ? require("./src/images/offer_icon.png")
              : require("./src/images/offer_n_icon.png");
          return <Image source={icon} style={styles.tabIcon} />;
        }
      }
    },
    // card tab Icon
    Cart: {
      screen: createStackNavigator({
        CartPage: HomeSreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon =
            focused == true
              ? require("./src/images/cart_icon.png")
              : require("./src/images/cart_n_icon.png");
          return <Image source={icon} style={styles.tabIcon} />;
        }
      }
    },
    // account tab Icon
    Account: {
      screen: createStackNavigator({
        AccountPage: HomeSreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon =
            focused == true
              ? require("./src/images/account_icon.png")
              : require("./src/images/account_n_icon.png");
          return <Image source={icon} style={styles.tabIcon} />;
        }
      }
    }
  })
});

const AppNavigation = createAppContainer(switchNavigator);

const App = () => {
  return <AppNavigation />;
};

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30
  }
});

export default App;
