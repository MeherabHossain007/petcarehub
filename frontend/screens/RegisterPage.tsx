import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";

import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Heading,
  Input,
  Link,
  VStack,
} from "native-base";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import Config from "../config/config";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleSignUp = () => {
    axios
      .post(`${Config.localhost}:3000/users/register`, {
        name: name.toString(),
        email: email.toString(),
        password: password.toString(),
      })
      .then((response) => {
        if (response.data == true) {
          alert("Account created successfully");
          navigation.navigate("LoginPage" as never);
        } else {
          console.log("POST decline!", response.data);
        }
      });
  };

  return (
    <View>
      <View style={style.imageContainer}>
        <Image
          style={style.imageLogo}
          source={require("../assets/logo.png")}
        ></Image>
      </View>
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          >
            Welcome
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            Register to continue!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChangeText={setName}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input
                id="email"
                type="text"
                value={email}
                onChangeText={setEmail}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChangeText={setPassword}
              />
            </FormControl>
            <Button mt="2" colorScheme="blue" onPress={handleSignUp}>
              Register
            </Button>
            <HStack mt="6" justifyContent="center">
              <Link
                _text={{
                  color: "indigo.500",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                href=""
              >
                or login
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </View>
  );
};

const style = StyleSheet.create({
  imageContainer: {
    paddingLeft: 30,
    // marginTop: 50,
    paddingTop: 45,
    marginLeft: 70,
    width: 10,
  },
  imageLogo: {
    width: 150,
    height: 150,
  },
});

export default RegisterPage;
