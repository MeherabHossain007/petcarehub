import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon, Input, ScrollView, VStack, Radio, Checkbox } from "native-base";
import { AntDesign } from "@expo/vector-icons";

const AdoptionForm = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <View style={styles.inputContainer}>
          <VStack w="100%" space={5} alignSelf="center">
            <Input
              placeholder="Enter City or Zip code"
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
        <View style={styles.inputContainer}>
          <VStack w="100%" space={5} alignSelf="center">
            {/* Pet Types */}
            <Text style={styles.label}>Pet Types (*)</Text>
            <Checkbox.Group
              defaultValue={[]}
              accessibilityLabel="choose pet types"
              colorScheme="green"
            >
              <Checkbox value="cat">Cat</Checkbox>
              <Checkbox value="dog">Dog</Checkbox>
              <Checkbox value="others">Others</Checkbox>
            </Checkbox.Group>

            {/* Gender */}
            <Text style={styles.label}>Gender (Optional)</Text>
            <Radio.Group defaultValue="male" name="gender">
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>

            {/* Size */}
            <Text style={styles.label}>Size (Optional)</Text>
            <Radio.Group defaultValue="small" name="size">
              <Radio value="small">Small</Radio>
              <Radio value="medium">Medium</Radio>
              <Radio value="large">Large</Radio>
            </Radio.Group>

            {/* Age */}
            <Text style={styles.label}>Age (Optional)</Text>
            <Radio.Group defaultValue="baby" name="age">
              <Radio value="baby">Baby</Radio>
              <Radio value="young">Young</Radio>
              <Radio value="adult">Adult</Radio>
            </Radio.Group>

            {/* Search Button */}
            <TouchableOpacity style={styles.searchButton}>
              <Text
                onPress={() => navigation.navigate("AdoptionPets")}
                style={styles.searchButtonText}
              >
                Search Now
              </Text>
              {/* <Button onPress={() => navigation.navigate("AdoptionForm")}> */}
            </TouchableOpacity>
          </VStack>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 50,
    marginLeft: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  searchButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  searchButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AdoptionForm;
