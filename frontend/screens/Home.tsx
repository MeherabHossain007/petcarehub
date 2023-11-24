import { Text } from "native-base";
import React from "react";
import { View, StyleSheet } from "react-native";

export default function Home() {
  return (
    <>
      <View style={style.mainContainer}>
        <View>
          <Text style={style.text1}>All Your Pet Needs</Text>
          <Text style={style.text2}>A Little </Text>
          <Text style={style.text2}>Care</Text>
          <Text style={style.text3}>From You</Text>
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    // backgroundColor: "gray",

    height: 250,
    // borderWidth: 2,
    // borderColor: "black",
    // borderRadius: 10,
    paddingLeft: 30,
    marginTop: 100,
    marginLeft: 70,
  },
  text1: {
    fontSize: 16,
  },
  text2: {
    fontSize: 20,
    paddingLeft: 30,
    color: "#2196F3",
  },
  text3: {
    paddingLeft: 30,
  },
});
