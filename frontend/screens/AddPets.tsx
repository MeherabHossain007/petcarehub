import { Icon, Input, ScrollView, VStack, Radio, Checkbox } from "native-base";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import { supabase } from "../lib/supabase";
import { useNavigation } from "@react-navigation/native";

const AddPets = () => {
  const [petName, setPetName] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petLocation, setPetLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");
  const [petTypes, setPetTypes] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const image = () => {
      if (petTypes == "cat") {
        setImageUrl(
          "https://eycmbkgaramyyygbikxq.supabase.co/storage/v1/object/public/photo/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg"
        );
      } else if (petTypes == "dog") {
        setImageUrl(
          "https://eycmbkgaramyyygbikxq.supabase.co/storage/v1/object/public/photo/dog-puppy-on-garden-royalty-free-image-1586966191.jpg"
        );
      } else {
        setImageUrl(
          "https://eycmbkgaramyyygbikxq.supabase.co/storage/v1/object/public/photo/Asset%2013343.png"
        );
      }
    };
    image();
  }, [petTypes]);

  const handleSubmission = async () => {
    const { data, error } = await supabase
      .from("adoptation")
      .insert([
        {
          name: petName,
          breed: petBreed,
          phone: phoneNumber,
          email: email,
          location: userLocation,
          zipcode: petLocation,
          age: age,
          gender: gender,
          size: size,
          type: petTypes,
          photo: imageUrl,
        },
      ])
      .select();

    if (error) {
      console.log(error);
    }

    if (data){
      navigation.goBack(); 
    }
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.label}>Pet Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter pet name"
            value={petName}
            onChangeText={(text) => setPetName(text)}
          />

          <Text style={styles.label}>Pet Breed:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter pet breed"
            value={petBreed}
            onChangeText={(text) => setPetBreed(text)}
          />

          <Text style={styles.label}>Zip Code:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter pet location"
            value={petLocation}
            onChangeText={(text) => setPetLocation(text)}
          />

          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
          />

          <Text style={styles.label}>Phone Number:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>Your Location:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your location"
            value={userLocation}
            onChangeText={(text) => setUserLocation(text)}
          />

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
          </View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmission}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  inputContainer: {
    marginTop: 10,
    marginLeft: 0,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  submitButton: {
    marginTop: 20,
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#2196F3",
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
  },
  uploadButtonText: {
    color: "#2196F3",
    fontSize: 16,
  },
});

export default AddPets;
