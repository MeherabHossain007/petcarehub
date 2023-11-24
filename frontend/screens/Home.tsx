import { Image, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import { Heading, Icon, Input, Stack, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import cat1 from "../assets/Cat1.png";
import cat2 from "../../../petcarehub/frontend/assets/Cat2.png";

export default function Home() {
  const bottom_tab = createBottomTabNavigator();
  return (
    <>
      <View style={style.inputContainer}>
        <VStack w="100%" space={5} alignSelf="center">
          <Input
            placeholder="Find Items for your pet!"
            width="90%"
            borderRadius="4"
            py="3"
            px="1"
            fontSize="14"
            InputLeftElement={
              <Icon
                m="2"
                ml="3"
                size="6"
                color="gray.400"
                as={<AntDesign name="search1" size={24} color="black" />}
              />
            }
          />
        </VStack>
      </View>
      <View style={style.heroMain}>
        <View style={style.heroLeft}>
          <Text style={style.mainText}>Shop Now!</Text>
          <Text style={style.secondText}>
            Shop from our website and get exclusive products!
          </Text>
          <TouchableOpacity style={style.btnStyle}>
            <Text style={style.btnText}>Get Started</Text>
          </TouchableOpacity>
        </View>
        <View style={style.heroRight}>
          <Image source={cat1} />
          <Image style={style.imgBottom} source={cat2} />
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  inputContainer: {
    marginTop: 50,
    marginLeft: 30,
  },
  btnStyle: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: "center",
    marginTop: 20,
  },
  btnText: {
    color: "white",
  },
  heroMain: {
    backgroundColor: "#EEE9F2",
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingLeft: 20,
  },
  heroLeft: {
    width: 200,
    // borderWidth: 2,
    // borderColor: "black",
    // borderRadius: 10,
  },
  heroRight: {
    width: 150,
    position: "relative",
    // borderWidth: 2,
    // borderColor: "black",
    // borderRadius: 10,
  },
  imgBottom: {
    position: "absolute",
    bottom: -30,
    left: -60,
  },
  mainText: {
    fontSize: 22,
    lineHeight: 44,
  },
  secondText: {
    color: "#939393",
    lineHeight: 20,
  },
});
