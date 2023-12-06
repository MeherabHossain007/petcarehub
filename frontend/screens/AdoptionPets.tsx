import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Button, Icon, Input, ScrollView, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";

const AdoptionPets = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <View style={style.inputContainer}>
          <VStack w="100%" space={5} alignSelf="center">
            <Input
              placeholder="Search By Name."
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
        {/* Adopt pet 1 */}

        <View style={style.adoptMe}>
          <Image source={require("../assets/Cat2.png")}></Image>
          <View style={style.heroMain5}>
            <Text style={style.Text1}>Mark</Text>
            <Text style={style.Text2}>Domestic Short Hair</Text>
            <Text>Dhaka, Bangladesh...!📍</Text>
            <TouchableOpacity style={style.btnStyle}>
              <Text
                style={style.btnText}
                onPress={() => navigation.navigate("PetDetails")}
              >
                Details
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Adopt pet 2 */}

        <View style={style.adoptMe}>
          <Image source={require("../assets/Cat2.png")}></Image>
          <View style={style.heroMain5}>
            <Text style={style.Text1}>Mark</Text>
            <Text style={style.Text2}>Domestic Short Hair</Text>
            <Text>Dhaka, Bangladesh...!📍</Text>
            <TouchableOpacity style={style.btnStyle}>
              <Text
                style={style.btnText}
                onPress={() => navigation.navigate("PetDetails")}
              >
                Details
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Adopt pet 3 */}

        <View style={style.adoptMe}>
          <Image source={require("../assets/Cat2.png")}></Image>
          <View style={style.heroMain5}>
            <Text style={style.Text1}>Mark</Text>
            <Text style={style.Text2}>Domestic Short Hair</Text>
            <Text>Dhaka, Bangladesh...!📍</Text>
            <TouchableOpacity style={style.btnStyle}>
              <Text
                style={style.btnText}
                onPress={() => navigation.navigate("PetDetails")}
              >
                Details
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Adopt pet 4 */}

        <View style={style.adoptMe}>
          <Image source={require("../assets/Cat2.png")}></Image>
          <View style={style.heroMain5}>
            <Text style={style.Text1}>Mark</Text>
            <Text style={style.Text2}>Domestic Short Hair</Text>
            <Text>Dhaka, Bangladesh...!📍</Text>
            <TouchableOpacity style={style.btnStyle}>
              <Text
                style={style.btnText}
                onPress={() => navigation.navigate("PetDetails")}
              >
                Details
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const style = StyleSheet.create({
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
  inputContainer: {
    marginTop: 50,
    marginLeft: 30,
  },
  adoptMe: {
    flexDirection: "row",
    // borderWidth: 2,
    // borderColor: "black",
    // borderRadius: 10,
    paddingLeft: 23,
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
    width: 210,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  Text1: {
    fontWeight: "bold",
    fontSize: 18,
  },
  Text2: {
    fontSize: 10,
  },
});

export default AdoptionPets;
