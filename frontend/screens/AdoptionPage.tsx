import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Button,
  Icon,
  Input,
  ScrollView,
  SimpleGrid,
  VStack,
  Image,
  HStack,
  Box,
  Text,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "../lib/supabase";

const AdoptionPage = ({ navigation }) => {
  const [adoption, setAdaption] = useState([]);

  const DogCategory = () => {
    const fetchData = async () => {
      let { data, error } = await supabase
        .from("adoptation")
        .select("*")
        .filter("type", "eq", "dog");
      if (data) {
        setAdaption(data);
      }
      if (error) {
        console.log(error);
      }
    };
    fetchData();
  }

    const CatCategory = () => {
      const fetchData = async () => {
        let { data, error } = await supabase
          .from("adoptation")
          .select("*")
          .filter("type", "eq", "cat");
        if (data) {
          setAdaption(data);
        }
        if (error) {
          console.log(error);
        }
      };
      fetchData();
    };

      const OtherCategory = () => {
        const fetchData = async () => {
          let { data, error } = await supabase
            .from("adoptation")
            .select("*")
            .filter("type", "eq", "others");
          if (data) {
            setAdaption(data);
          }
          if (error) {
            console.log(error);
          }
        };
        fetchData();
      };

  useEffect(() => {
    const fetchData = async () => {
      let { data, error } = await supabase.from("adoptation").select("*");
      if (data) {
        setAdaption(data);
      }
      if (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          {/* <View style={style.inputContainer}>
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
        </View> */}
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
              <Button
                onPress={() => navigation.navigate("AddPets")}
                colorScheme={"lightBlue"}
                mt={5}
              >
                <Text style={style.btnText}>Add Adoption</Text>
              </Button>
            </View>
          </View>

          <Button
            colorScheme={"lightBlue"}
            m={3}
            onPress={() => navigation.navigate("AdoptionForm")}
          >
            <Text color={"white"}>Search Now</Text>
          </Button>

          {/* Cateogory */}
          <View>
            <Text style={style.mainText3}>Categories</Text>
          </View>
          <View style={style.heroMain4}>
            <SimpleGrid columns={3} space={5}>
              <Button
                onPress={DogCategory}
                colorScheme={"lightBlue"}
              >
                <Image
                  style={style.dogIcon}
                  source={require("../assets/dogIcon.png")}
                />
              </Button>
              <Button
                onPress={CatCategory}
                colorScheme={"lightBlue"}
              >
                <Image
                  style={style.dogIcon}
                  source={require("../assets/catIcon.png")}
                />
              </Button>
              <Button
                onPress={OtherCategory}
                colorScheme={"lightBlue"}
              >
                <Image
                  style={style.dogIcon}
                  source={require("../assets/rescueIcon.png")}
                />
              </Button>
            </SimpleGrid>
          </View>

          {/* Adopt Me section  */}
          {adoption.map(
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
  searchButtonStyle: {
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AdoptionPage;
