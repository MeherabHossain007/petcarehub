import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Icon, Input, ScrollView, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";

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
      </ScrollView>
    </>
  );
};

const style = StyleSheet.create({
  //   firstContainer: {
  //     height: 150,
  //     paddingLeft: 30,
  //     marginTop: 20,
  //     marginLeft: 70,
  //   },
  inputContainer: {
    marginTop: 50,
    marginLeft: 30,
  },
});

export default AdoptionPage;
