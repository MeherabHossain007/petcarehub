import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Button, Icon, Input, ScrollView, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const AdoptionPage = () => {
  return (
    <>
      <ScrollView>
        <View style={style.inputContainer}>
          <VStack w="100%" space={5} alignSelf="center">
            <Input
              placeholder="Search dog, cat, etc."
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
              <Text style={style.btnText}>Adopt Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Cateogory */}
        <View>
          <Text style={style.mainText3}>Categories</Text>
        </View>
        <View style={style.heroMain4}>
          <Button>
            <Image
              style={style.dogIcon}
              source={require("../assets/dogIcon.png")}
            />
          </Button>
          <Button>
            <Image
              style={style.dogIcon}
              source={require("../assets/catIcon.png")}
            />
          </Button>
          <Button>
            <Image
              style={style.dogIcon}
              source={require("../assets/rescueIcon.png")}
            />
          </Button>
        </View>

        {/* Adopt Me section  */}

        <View style={style.adoptMe}>
          <Image source={require("../assets/Cat2.png")}></Image>
          <View style={style.heroMain5}>
            <Text style={style.Text1}>Mark</Text>
            <Text style={style.Text2}>Domestic Short Hair</Text>
            <Text>Dhaka, Bangladesh...!📍</Text>
          </View>
        </View>

        <View style={style.adoptMe}>
          <Image source={require("../assets/Cat2.png")}></Image>
          <View style={style.heroMain5}>
            <Text style={style.Text1}>Mark</Text>
            <Text style={style.Text2}>Domestic Short Hair</Text>
            <Text>Dhaka, Bangladesh...!📍</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const style = StyleSheet.create({
  Text1: {
    fontWeight: "bold",
    fontSize: 18,
  },
  Text2: {
    fontSize: 10,
  },
  adoptMe: {
    flexDirection: "row",
    // borderWidth: 2,
    // borderColor: "black",
    // borderRadius: 10,
    paddingLeft: 10,
    marginTop: 20,
  },
  heroMain5: {
    // borderWidth: 2,
    // borderColor: "black",
    // borderRadius: 10,
    borderRadius: 10,
    padding: 20,
    backgroundColor: "#EEE9F2",
    marginTop: 1,
    gap: 1,
    paddingLeft: 10,
    width: 230,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  heroMain4: {
    // borderWidth: 2,
    // borderColor: "black",
    // borderRadius: 10,

    backgroundColor: "#EEE9F2",
    flexDirection: "row",
    marginTop: 10,
    gap: 15,
    paddingLeft: 10,

    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  dogIcon: {
    width: 70,
    height: 70,
  },
  inputContainer: {
    marginTop: 50,
    marginLeft: 30,
  },
  mainText3: {
    fontSize: 22,
    lineHeight: 44,
    paddingLeft: 15,
    // borderWidth: 2,
    // borderColor: "black",
    // borderRadius: 10,
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
  heroLeft: {
    width: 200,
  },
  heroRight2: {
    width: 150,
    position: "relative",
  },
  secondText: {
    color: "#939393",
    lineHeight: 20,
  },
  btnText: {
    color: "white",
  },
  btnStyle: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: "center",
    marginTop: 20,
  },
});

export default AdoptionPage;
