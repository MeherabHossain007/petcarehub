import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { Alert } from "react-native";

const Checkout = () => {

    const handlepress = () => {
        Alert.alert(
            "Order Placed",
            'Successfully Order Added',
            [
                {
                text: "OK",
                },
            ],
        )
    }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.view1}>
          <Image source={require("../assets/gift.png")} />
          <Text style={styles.text1}>
            shop $100 more and get a{" "}
            <Text style={styles.text2}>free gift!</Text>
          </Text>
        </View>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text3}>1 item in your bag </Text>

        <View style={styles.view3}>
          <Image source={require("../assets/dog-food-11.png")} />

          <View style={styles.view4}>
            <Text style={{ color: "#000000", fontWeight: "500" }}>
              Dog Food
            </Text>
            <Text style={{ color: "#939393", fontWeight: "500" }}>200 gm</Text>
            <TouchableOpacity style={styles.button1}>
              <Text style={{ color: "white" }}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.view5}>
        <View style={styles.subview1}>
          <Text style={styles.text3}>Total $</Text>

          <Text style={styles.text3}>26.99</Text>
        </View>
        <View style={styles.subview2}>
          <Text style={styles.text3}>Shipping charges</Text>
          <Text style={styles.text3}>3.2 $</Text>
        </View>

        <View style={styles.subview1}>
          <Text style={{ color: "black", fontWeight: "bold" }}>TOTAL</Text>

          <Text>30.19 $</Text>
        </View>

        <View style={styles.view6}>
          <View>
            <Text style={{ fontWeight: "bold" }}>TOTAL</Text>
            <Text>30.19 $</Text>
          </View>
            <TouchableOpacity style={styles.button2} onPress={handlepress}>
                <Text style={{ color: "white" }}>Checkout</Text>

            </TouchableOpacity>
        </View>
        
      </View>

    

     
    
    </>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  view1: {
    alignItems: "center",
    marginTop: 100,
    gap: 30,
    borderWidth: 1,
    padding: 20,
    width: "80%",
    borderColor: "#939393",
  },

  text1: {
    color: "#939393",
  },

  text2: {
    color: "#FF1717",
    textTransform: "capitalize",
  },
  view2: {
    marginTop: 50,
    marginLeft: "10%",
  },
  text3: {
    color: "#939393",
  },

  view3: {
    marginTop: 20,
    flexDirection: "row",
    gap: 20,
  },

  button1: {
    backgroundColor: "#2196F3",
    borderRadius: 5,
    padding: 10,
    width: "150%",
    alignItems: "center",
  },

  view4: {
    gap: 15,
  },

  view5: {
    marginTop: 50,
    alignItems: "center",
    gap: 25,
  },
  subview1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },

  subview2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderColor: "#939393",
  },

  view6:{

    marginTop: 50,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",


  },

  button2: {
    backgroundColor: "#2196F3",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    marginLeft: 180,
  },
});
