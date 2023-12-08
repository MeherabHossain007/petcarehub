import { View, Text, Image, StyleSheet, Linking } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Badge, Button, HStack, VStack } from "native-base";

const PetDetails = ({ route, navigation }: any) => {
  const { pet } = route.params;
  console.log(pet);

  return (
    <>
      <View>
        <Image
          style={style.inputContainer}
          source={{
            uri: `${pet.photo}`,
          }}
        ></Image>
      </View>
      <View>
        <View style={style.heroMain3}>
          <View style={style.heroMain5}>
            <HStack space={2}>
              <Text style={style.Text1}>{pet.name}</Text>
              <Text style={style.Text2}>{pet.breed}</Text>
            </HStack>
            <HStack space="2">
              <Badge colorScheme="info" fontSize={14} borderRadius={10}>
                {pet.size}
              </Badge>
              <Badge colorScheme="info" fontSize={14} borderRadius={10}>
                {pet.age}
              </Badge>
              <Badge colorScheme="info" fontSize={14} borderRadius={10}>
                {pet.gender}
              </Badge>
            </HStack>
            <Text>📍{pet.location}</Text>
            <Badge
              colorScheme="blue"
              variant={"solid"}
              fontSize={14}
              borderRadius={10}
            >
              {pet.email}
            </Badge>
            <Badge
              colorScheme="blue"
              variant={"solid"}
              fontSize={14}
              borderRadius={10}
            >
              {pet.phone}
            </Badge>
            <HStack space={4}>
              <Button
                onPress={() => Linking.openURL(`tel:${pet.phone}`)}
                colorScheme={"lightBlue"}
                mt={5}
              >
                <Text style={style.btnText}>Adopt Now</Text>
              </Button>
              <Button
                onPress={() =>
                  Linking.openURL(
                    `whatsapp://send?text=hello&phone=+88${pet.phone}`
                  )
                }
                colorScheme={"green"}
                mt={5}
              >
                <Text style={style.btnText}>Whatsapp Now</Text>
              </Button>
            </HStack>
          </View>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  Text1: {
    fontWeight: "bold",
    fontSize: 20,
    // borderWidth: 2,
    // borderColor: "black",
    // borderRadius: 10,
  },
  Text2: {
    fontSize: 12,
  },
  heroMain5: {
    // borderWidth: 2,
    // borderColor: "black",
    // borderRadius: 10,
    borderRadius: 10,
    padding: 20,
    backgroundColor: "#EEE9F2",
    marginTop: 1,
    gap: 10,
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
    height: 300,
  },
  heroMain3: {
    // borderWidth: 2,
    // borderColor: "black",
    borderRadius: 10,
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
