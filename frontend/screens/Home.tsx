import { Button, Text } from "native-base";
import React from "react";
import { Image, View, StyleSheet } from "react-native";
import logo from "../assets/logo.png";
export default function Home() {
  return (
    <>
      <View style={style.firstContainer}>
        <View>
          <Text style={style.text1}>All Your Pet Needs</Text>
          <Text style={style.text2}>A Little </Text>
          <Text style={style.text2}>Care</Text>
          <Text style={style.text3}>From You</Text>
        </View>
      </View>
      <View style={style.secondContainer}>
        <Image style={style.logoStyle} source={logo} />
        <Text style={style.logoText}>
          Furry Friends, Forever Love. Unleash happiness at our pet shop, where
          every pawprint finds its forever home
        </Text>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  firstContainer: {
    // backgroundColor: "gray",

    height: 150,
    // borderWidth: 2,
    // borderColor: "black",
    // borderRadius: 10,
    paddingLeft: 30,
    marginTop: 100,
    marginLeft: 70,
  },
  text1: {
    fontSize: 22,
    lineHeight: 44,
  },
  text2: {
    fontSize: 20,
    paddingLeft: 50,
    color: "#2196F3",
    lineHeight: 24,
    fontWeight: "bold",
  },
  text3: {
    paddingLeft: 50,
    lineHeight: 34,
  },
  secondContainer: {
    height: 400,
    position: "relative",
    marginTop: 70,
    backgroundColor: "#EEE9F2",
  },
  logoStyle: {
    position: "absolute",
    top: -80,
    right: 100,
  },
  logoText: {
    width: 300,
    top: 100,
    textAlign: "center",
    right: -30,
    color: "#939393",
    marginTop: 10,
  },
});
