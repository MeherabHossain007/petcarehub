import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const AddPets = () => {
  const [petName, setPetName] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petLocation, setPetLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userLocation, setUserLocation] = useState("");

  const handleSubmission = () => {
    // Form submission Logic!
  };

  return (
    <>
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

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmission}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
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
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#2196F3",
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default AddPets;
