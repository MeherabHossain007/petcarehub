import { ScrollView } from "native-base";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { supabase } from "../lib/supabase";

const AddPets = () => {
  const [petName, setPetName] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petLocation, setPetLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmission = async () => {
    const { data, error } = await supabase
      .from("adoptation")
      .insert([{ name: petName }, { breed: petBreed }, ])
      .select();

    if (error) {
      console.log(error);
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

          <Text style={styles.label}>Pet Location:</Text>
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

          <Text style={styles.label}>Pet Photo:</Text>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Button
              title="Pick an image from camera roll"
              onPress={pickImage}
            />
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
              />
            )}
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
