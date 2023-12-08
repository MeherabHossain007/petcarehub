import { Icon, Input, ScrollView, VStack, Radio, Checkbox } from "native-base";
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

  const handleSubmission = () => {
    // Form submission Logic!
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
            </VStack>
          </View>

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
