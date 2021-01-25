import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { LandingScreen } from "./src/screens/LandingScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { HomeScreen } from "./src/screens/HomeScreen";
import { Provider } from "react-redux";
import { store } from "./src/redux";

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
      screen: createStackNavigator(
        {
          HomePage: HomeScreen
        },
        {
          DefaulfNavigationOptions: {
            HeaderShown: false
          }
        }
      ),
      navigationOptions: {
        HeaderShown: false,
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
        OfferPage: HomeScreen
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
        CartPage: HomeScreen
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
        AccountPage: HomeScreen
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
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30
  }
});

export default App;
