import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const PetDetails = () => {
  return (
    <>
      <View>
        <Image
          style={style.inputContainer}
          source={require("../assets/detailCat.png")}
        ></Image>
      </View>
      <View>
        <View style={style.heroMain3}>
          <View style={style.heroMain5}>
            <Text style={style.Text1}>Mark</Text>
            <Text style={style.Text2}>Domestic Short Hair</Text>
            <Text>Dhaka, Bangladesh...!📍</Text>
            <TouchableOpacity style={style.btnStyle}>
              <Text style={style.btnText}>Adopt Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  Text1: {
    fontWeight: "bold",
    fontSize: 18,
    // borderWidth: 2,
    // borderColor: "black",
    // borderRadius: 10,
  },
  Text2: {
    fontSize: 10,
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
  heroLeft: {
    width: 200,
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
  secondText: {
    color: "#939393",
    lineHeight: 20,
  },
  heroRight2: {
    paddingRight: 20,
    marginRight: 50,
  },
  inputContainer: {
    width: 400,
    height: 300,
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
});

export default PetDetails;
