import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  Button,
  HStack,
  Icon,
  Input,
  ScrollView,
  VStack,
  Image,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

const AdoptionPets = ({ navigation, route }) => {
  const { post } = route.params;
  console.log(post);

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          {post.map(
            (post) => (
              console.log(post.photo),
              (
                <View style={style.adoptMe}>
                  <View style={style.heroMain5}>
                    <HStack space={10}>
                      <Image
                        borderRadius={10}
                        size={100}
                        source={{
                          uri: `${post.photo}`,
                        }}
                        alt="image"
                      ></Image>
                      <View>
                        <Text style={style.Text1}>{post.name}</Text>
                        <Text style={style.Text2}>{post.breed}</Text>
                        <Text>{post.location}</Text>
                        <TouchableOpacity style={style.btnStyle}>
                          <Text
                            style={style.btnText}
                            onPress={() =>
                              navigation.navigate("PetDetails", { pet: post })
                            }
                          >
                            Details
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </HStack>
                  </View>
                </View>
              )
            )
          )}
        </ScrollView>
      </SafeAreaView>
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
    paddingLeft: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
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
    flex: 1,
    paddingLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  heroMain4: {
    // borderWidth: 2,
    // borderColor: "black",
    borderRadius: 10,
    backgroundColor: "#EEE9F2",
    flexDirection: "row",
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
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
    borderRadius: 10,
    backgroundColor: "#EEE9F2",
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
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

export default AdoptionPets;
