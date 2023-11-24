import { Image, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import { Heading, Icon, Input, Stack, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";

export default function Home() {
  return (
    <>
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
    </>
  );
}

const style = StyleSheet.create({
  inputContainer: {
    marginTop: 50,
    marginLeft: 30,
  },
});
