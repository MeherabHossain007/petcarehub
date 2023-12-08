import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon, Input, ScrollView, VStack, Radio, Checkbox } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { supabase } from "../lib/supabase";

const AdoptionForm = ({ navigation }) => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");
  const [petTypes, setPetTypes] = useState("");
  const [adoption, setAdaption] = useState([]);

  const handleSubmission = async () => {
    const { data, error } = await supabase
      .from("adoptation")
      .select()
      .filter("age", "eq", age)
      .filter("gender", "eq", gender)
      .filter("size", "eq", size)
      .filter("type", "eq", petTypes);

    if (error) {
      console.log(error);
    }

    if (data) {
      setAdaption(data);
      navigation.navigate("AdoptionPets", { post: adoption });
    }
  };
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
            <Text style={styles.label}>Pet Types</Text>
            <Radio.Group name="type" onChange={setPetTypes}>
              <Radio value="cat">Cat</Radio>
              <Radio value="dog">Dog</Radio>
              <Radio value="others">Others</Radio>
            </Radio.Group>

            {/* Gender */}
            <Text style={styles.label}>Gender</Text>
            <Radio.Group name="gender" onChange={setGender}>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>

            {/* Size */}
            <Text style={styles.label}>Size </Text>
            <Radio.Group name="size" onChange={setSize}>
              <Radio value="small">Small</Radio>
              <Radio value="medium">Medium</Radio>
              <Radio value="large">Large</Radio>
            </Radio.Group>

            {/* Age */}
            <Text style={styles.label}>Age </Text>
            <Radio.Group name="age" onChange={setAge}>
              <Radio value="baby">Baby</Radio>
              <Radio value="young">Young</Radio>
              <Radio value="adult">Adult</Radio>
            </Radio.Group>
          </VStack>
          <TouchableOpacity
            style={styles.searchButton}
            onPress={handleSubmission}
          >
            <Text style={styles.searchButtonText}>Search Now</Text>
          </TouchableOpacity>
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
    marginTop: 30,
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
