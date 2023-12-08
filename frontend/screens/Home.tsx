import { Image, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import { Heading, Icon, Input, ScrollView, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";

export default function Home({ navigation }) {
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
              <Text
                onPress={() => navigation.navigate("Dashboard")}
                style={style.btnText}
              >
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style.heroRight}>
            <Image source={require("../assets/Cat1.png")} />

            <Image
              style={style.imgBottom}
              source={require("../assets/Cat2.png")}
            />
          </View>
        </View>
        <View>
          <Text style={style.mainText2}>Shop By Pet</Text>
        </View>
        <View style={style.secondContainer}>
          <Image source={require("../assets/dog.png")} />
          <Text style={style.animalText1}>Dog items!</Text>
          <Image source={require("../assets/cat.png")} />
          <Text style={style.animalText2}>Cat items!</Text>
          <Image source={require("../assets/bird.png")} />
          <Text style={style.animalText3}>Bird items!</Text>
        </View>
        {/* Adopt from us section  */}
        <View>
          <Text style={style.mainText3}>Adopt from us</Text>
        </View>
        <View style={style.heroMain3}>
          <View style={style.heroLeft}>
            <Image source={require("../assets/women.png")}></Image>
          </View>
          <View style={style.heroRight2}>
            <Text style={style.secondText}>
              "Explore our website to find your perfect companion.
            </Text>
            <TouchableOpacity style={style.btnStyle}>
              <Text
                style={style.btnText}
                onPress={() => navigation.navigate("AdoptionPage")}
              >
                Adopt Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Pet Health Advice  */}
        <View>
          <Text style={style.mainText4}>Free Pet Health Advice</Text>
        </View>
        <View style={style.heroMain4}>
          <View style={style.heroLeft}>
            <View style={style.heroRight4}>
              <Text style={style.secondText}>
                "Explore our website to find your perfect companion.
              </Text>
              <TouchableOpacity style={style.btnStyle} onPress={() => navigation.navigate("Chat")}>
                <Text style={style.btnText}>Advice</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Image source={require("../assets/twoCat.png")}></Image>
        </View>
      </ScrollView>
    </>
  );
}

const style = StyleSheet.create({
  mainText3: {
    fontSize: 22,
    lineHeight: 44,

    paddingLeft: 15,
  },
  mainText4: {
    fontSize: 22,
    lineHeight: 44,

    paddingLeft: 15,
  },
  heroMain4: {
    flexDirection: "row",

    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
  },
  heroMain3: {
    // borderWidth: 2,
    // borderColor: "black",
    // borderRadius: 10,

    backgroundColor: "#EEE9F2",
    flexDirection: "row",
    marginTop: 10,

    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  heroRight2: {
    width: 150,
    position: "relative",
  },
  heroRight4: {
    width: 180,
    position: "relative",

    marginLeft: 10,
  },
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
  },
  heroRight: {
    width: 150,
    position: "relative",
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

    paddingLeft: 15,
    paddingTop: 20,
  },

  secondText: {
    color: "#939393",
    lineHeight: 20,
  },
  secondContainer: {
    flexDirection: "row",
    position: "relative",
    gap: 25,

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
    left: 262,
  },
});
