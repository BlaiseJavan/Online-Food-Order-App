import React, { useState, useReducer, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import * as Location from "expo-location";
// import { useNavigation } from "../utils";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from "react-navigation";

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

// const { navigate } = useNavigation();
const screenWidth = Dimensions.get("screen").width;

const LandingSreen = (props: Props) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [address, setAddress] = useState<Location.Address>();
  const [displayAddress, setDisplayAddress] = useState(
    "Waiting for current location"
  );

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status == "granted") {
        setErrorMsg("permission to access location is not granted");
      }
      let location: any = await Location.getCurrentPositionAsync();

      const { coords } = location;

      if (coords) {
        const { latitude, longitude } = coords;
        let addressResponse: any = await Location.reverseGeocodeAsync({
          latitude,
          longitude
        });
        for (let item of addressResponse) {
          setAddress(item);
          let currentAddress = `${item.name}, ${item.street}, ${item.district}, ${item.country}`;
          setDisplayAddress(currentAddress);
          if (currentAddress.length > 0) {
            setTimeout(() => {
              props.navigation.navigate("homeStack");
            }, 2000);
          }
          return;
        }
      } else {
        //code
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.navigation}></View>
      <View style={styles.body}>
        <Image
          source={require("../images/delivery_icon.png")}
          style={styles.deliveryIcon}
        />
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}> Your Delivery Address </Text>
        </View>
        <Text style={styles.addressText}>{displayAddress}</Text>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F0F1"
  },
  navigation: {
    flex: 2
  },
  body: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center"
  },
  deliveryIcon: {
    width: 120,
    height: 120
  },
  addressContainer: {
    width: screenWidth - 100,
    borderBottomColor: "red",
    borderBottomWidth: 0.5,
    padding: 5,
    marginBottom: 10,
    alignItems: "center"
  },
  addressTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#7D7D7D"
  },
  addressText: {
    fontSize: 20,
    fontWeight: "200",
    color: "#4F4F4F",
    textAlign: "center"
  },
  footer: {
    flex: 1
  }
});

export default LandingSreen;
