import { Text } from "native-base";
import React from "react";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function StartPage({ navigation }) {
  return (
    <>
      <View style={style.iconStyle}>
        <Entypo
          onPress={() => navigation.navigate("Home")}
          name="cross"
          size={30}
          color="black"
        />
      </View>
      <View style={style.firstContainer}>
        <View>
          <Text style={style.text1}>All Your Pet Needs</Text>
          <Text style={style.text2}>A Little</Text>
          <Text style={style.text3}>From You</Text>
        </View>
      </View>
      <View style={style.secondContainer}>
        <Image style={style.logoStyle} source={require("../assets/logo.png")} />
        <Text style={style.logoText}>
          Furry Friends, Forever Love. Unleash happiness at our pet shop, where
          every pawprint finds its forever home.
        </Text>
        <View style={style.fullBtn}>
          <TouchableOpacity style={style.btnStyle}>
            <Text
              onPress={() => navigation.navigate("RegisterPage")}
              style={style.btnText}
            >
              Register
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.btnStyle}>
            <Text
              onPress={() => navigation.navigate("LoginPage")}
              style={style.btnText}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  firstContainer: {
    height: 150,

    paddingLeft: 30,
    marginTop: 20,
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

  fullBtn: {
    flexDirection: "row",
    gap: 50,
    top: 150,
    left: 60,
  },
  btnStyle: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: "center",
  },
  btnText: {
    color: "white",
  },
  iconStyle: {
    marginTop: 30,
    paddingLeft: 10,
  },
});
