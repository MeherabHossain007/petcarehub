import { Image, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import { Heading, Icon, Input, ScrollView, Stack, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import cat1 from "../assets/Cat1.png";
import cat2 from "../assets/Cat2.png";
import cat from "../assets/cat.png";
import dog from "../assets/dog.png";
import bird from "../assets/bird.png";

export default function Home() {
  return (
    <>
      <ScrollView>
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
        <View>
          <Text style={style.mainText2}>Shop By Pet</Text>
        </View>
        <View style={style.secondContainer}>
          <Image source={dog} />
          <Text style={style.animalText1}>Dog items!</Text>
          <Image source={cat} />
          <Text style={style.animalText2}>Cat items!</Text>
          <Image source={bird} />
          <Text style={style.animalText3}>Bird items!</Text>
        </View>
      </ScrollView>
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
    // borderWidth: 2,
    // borderColor: "black",
    // borderRadius: 10,
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
  mainText2: {
    fontSize: 22,
    lineHeight: 44,
    // borderWidth: 2,
    // borderColor: "black",
    // borderRadius: 10,
    paddingLeft: 15,
    paddingTop: 20,
  },

  secondText: {
    color: "#939393",
    lineHeight: 20,
  },
  secondContainer: {
    // borderWidth: 2,
    // borderColor: "black",
    // borderRadius: 10,
    // backgroundColor: "#EEE9F2",
    flexDirection: "row",
    position: "relative",
    gap: 25,

    // marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 10,
  },
  animalText1: {
    position: "absolute",
    top: 40,
    left: 22,
    color: "white",
  },
  animalText2: {
    position: "absolute",
    color: "white",
    top: 40,
    left: 150,
  },
  animalText3: {
    position: "absolute",
    color: "white",
    top: 40,
    left: 270,
  },
});

// borderWidth: 2,
// borderColor: "black",
// borderRadius: 10,
