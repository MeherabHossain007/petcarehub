import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  AspectRatio,
  Box,
  Button,
  Center,
  CheckIcon,
  Flex,
  FormControl,
  HStack,
  Image,
  Input,
  Modal,
  ScrollView,
  Select,
  VStack,
} from "native-base";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Details = ({ route }) => {
  const { prod } = route.params;
  const [modalVisible, setModalVisible] = React.useState(false);
  const [count, setCount] = useState(0);

  const navigation = useNavigation();

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let [fontsLoaded] = useFonts({
    Leckerl: require("../assets/fonts/LeckerliOne-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>loading</Text>;
  }

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Box mt={"16"} p={4}>
            <Box alignItems={"center"}>
              <AspectRatio w="90%">
                <Image
                  rounded={"lg"}
                  source={{
                    uri: "https://images.deliveryhero.io/image/nv/Thailand/Vendor-Ops/09012023/TH-Whiskas-Tuna-Flavour-Cat-Food-3kg-Front-View.jpg?height=480",
                  }}
                  alt="Image"
                />
              </AspectRatio>
            </Box>

            <Center mt={5}>
              <Box>
                <VStack space={4}>
                  <Text style={styles.text3}>{prod.title}</Text>
                  <HStack>
                    <Text style={styles.text1}>price: </Text>
                    <Text style={styles.text3}>{prod.price}</Text>
                  </HStack>
                  <Text style={styles.text1}>Details</Text>
                  <Text style={styles.text2}>{prod.description}</Text>
                </VStack>
              </Box>
            </Center>
          </Box>
        </ScrollView>

        <Flex
          position={"absolute"}
          bottom={"0"}
          width={"100%"}
          direction="row"
          justifyContent={"center"}
          gap={4}
        >
          <Box
            bg={"white"}
            height={100}
            width={"100%"}
            p={3}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <HStack space={4}>
              <Button width={"32"} mb={"2"}>
                Buy Now
              </Button>
              <Button
                width={"32"}
                mb={"2"}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                Add To Cart
              </Button>
            </HStack>
          </Box>
          {/* <Button width={"32"} mb={"2"} left={"2"}>
          Add To Cart
        </Button> */}

          <Modal
            isOpen={modalVisible}
            onClose={() => setModalVisible(false)}
            avoidKeyboard
            justifyContent="flex-end"
            size="full"
          >
            <Modal.Content>
              <Modal.CloseButton />
              <Modal.Header>
                <Box>
                  <AspectRatio w="50%" ratio={16 / 9}>
                    <Image
                      rounded={"lg"}
                      source={{
                        uri: "https://images.deliveryhero.io/image/nv/Thailand/Vendor-Ops/09012023/TH-Whiskas-Tuna-Flavour-Cat-Food-3kg-Front-View.jpg?height=480",
                      }}
                      alt="Image"
                    />
                  </AspectRatio>
                </Box>
                <Box position={"absolute"} left={"48"} top={"5"} gap={2}>
                  <Text style={{ color: "#2196F3" }}>$26.99</Text>
                  <Text style={{ color: "#939393" }}>Dog Food</Text>
                </Box>
              </Modal.Header>
              <Modal.Body>
                <AspectRatio w="30%" ratio={16 / 9}>
                  <Image
                    rounded={"lg"}
                    source={{
                      uri: "https://images.deliveryhero.io/image/nv/Thailand/Vendor-Ops/09012023/TH-Whiskas-Tuna-Flavour-Cat-Food-3kg-Front-View.jpg?height=480",
                    }}
                    alt="Image"
                  />
                </AspectRatio>

                <Box style={{ marginTop: 50 }}>
                  <Flex
                    direction="row"
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Text style={{ fontWeight: "bold" }}>Quantity</Text>
                    <Box>
                      <Flex direction={"row"} gap={4} alignItems={"center"}>
                        <Button onPress={increase}>+</Button>
                        <Text>{count}</Text>
                        <Button onPress={decrease}>-</Button>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              </Modal.Body>
              <Modal.Footer>
                <Button flex="1" onPress={() => {navigation.navigate("Checkout" as never); setModalVisible(false);}}>
                  Checkout Now
                </Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </Flex>
      </SafeAreaView>
    </>
  );
};

export default Details;

const styles = StyleSheet.create({
  text1: {
    fontFamily: "Leckerl",
    color: "#2196F3",
    fontSize: 26,
  },

  text2: {
    marginTop: 8,
    letterSpacing: 2,
    lineHeight: 20,
  },
  text3: {
    fontWeight: "bold",
    color: "black",
    fontSize: 26,
  },
});
