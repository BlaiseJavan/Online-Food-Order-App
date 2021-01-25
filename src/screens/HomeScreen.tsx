import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

import { connect } from "react-redux";
import {
  ApplicationState,
  onAvailability,
  ShoppingState,
  UserState
} from "../redux";

interface Props {
  userReducer: UserState;
  shoppingReducer: ShoppingState;
  onAvailability: Function;
}

const _HomeScreen = (props: Props) => {
  const { availability } = props.shoppingReducer;
  const { location } = props.userReducer;

  const { category, foods, restaurants } = availability;
  console.log(foods);

  useEffect(() => {
    props.onAvailability(location.postalCode);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <View
          style={{
            marginTop: 50,
            flex: 4,
            backgroundColor: "white",
            paddingLeft: 20,
            paddingRight: 20,
            alignItems: "flex-start",
            justifyContent: "center"
          }}
        >
          <Text>
            {`${location.name}, ${location.street}, ${location.city}`}{" "}
          </Text>
          <Text>Edit</Text>
        </View>
        <View
          style={{
            flex: 8,
            backgroundColor: "green"
          }}
        >
          <Text>Search bar</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text> Home screen </Text>
      </View>
      <View style={styles.footer}>
        <Text> footer </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green"
  },
  navigation: {
    flex: 2,
    backgroundColor: "red"
  },
  body: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow"
  },
  footer: {
    flex: 1,
    backgroundColor: "cyan"
  }
});

const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.userReducers,
  shoppingReducer: state.shoppingReducers
});

const HomeScreen = connect(mapToStateProps, { onAvailability })(_HomeScreen);
export { HomeScreen };
