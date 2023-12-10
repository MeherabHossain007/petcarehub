import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleUpdateProfile = () => {
    console.log("Profile updated:", { name, email });
  };

  return (
    <View>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
