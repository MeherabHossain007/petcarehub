import { View, Image, StyleSheet } from "react-native";
import React from "react";
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

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            Login to continue!
          </Heading>

          <VStack space={3} mt="5">
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
            <Button mt="2" colorScheme="blue">
              Log In
            </Button>
            <HStack mt="6" justifyContent="center">
              <Link
                _text={{
                  color: "indigo.500",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                href="#"
              >
                Register
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

export default LoginPage;
function useState(arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}
