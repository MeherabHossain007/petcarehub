import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

import {
  AspectRatio,
  Box,
  Button,
  Center,
  CheckIcon,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  ScrollView,
  Select,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "native-base";

const Dashboard = ({navigation} : {navigation: any}) => {
  const [service, setService] = useState("");
  return (
    <>
      <ScrollView mb={2}>
        <Center>
          <Box maxW="300" mt={16}>
            <Select
              selectedValue={service}
              minWidth="200"
              accessibilityLabel="Sort by"
              placeholder="Sort by"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setService(itemValue)}
            >
              <Select.Item label="Price (low to high)" value="price" />
              <Select.Item label="Rating (high to low)" value="rating" />
            </Select>
          </Box>
        </Center>

        


        <Center>


          <SimpleGrid columns={2}>
         
            <Box mx={2} mt={10}>
              <Box
                width="40"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                  borderColor: "coolGray.600",
                  backgroundColor: "gray.700",
                }}
                _web={{
                  shadow: 2,
                  borderWidth: 0,
                }}
                _light={{
                  backgroundColor: "gray.50",
                }}
              >
                <Box alignItems={"center"}>
                  <AspectRatio w="90%" ratio={16 / 9}>
                    <Image
                      source={{
                        uri: "https://images.deliveryhero.io/image/nv/Thailand/Vendor-Ops/09012023/TH-Whiskas-Tuna-Flavour-Cat-Food-3kg-Front-View.jpg?height=480",
                      }}
                      alt="image"
                    />
                  </AspectRatio>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="sm" ml="-1">
                      DogFood (afoxolaner) chewwables
                    </Heading>
                  </Stack>

                  <Text fontWeight="400" color={"blue.400"}>
                    $26.99
                  </Text>

                  <Button onPress={() => navigation.navigate('Details')}>Show details</Button>
                </Stack>
              </Box>
            </Box>

            <Box mx={2} mt={10}>
              <Box
                width="40"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                  borderColor: "coolGray.600",
                  backgroundColor: "gray.700",
                }}
                _web={{
                  shadow: 2,
                  borderWidth: 0,
                }}
                _light={{
                  backgroundColor: "gray.50",
                }}
              >
                <Box alignItems={"center"}>
                  <AspectRatio w="90%" ratio={16 / 9}>
                    <Image
                      source={{
                        uri: "https://www.whiskas.co.uk/sites/g/files/fnmzdf4306/files/migrate-product-files/images/ufm542zavi7hbsl8ndnz.png",
                      }}
                      alt="image"
                    />
                  </AspectRatio>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="sm" ml="-1">
                      DogFood (afoxolaner) chewwables
                    </Heading>
                  </Stack>

                  <Text fontWeight="400" color={"blue.400"}>
                    $26.99
                  </Text>

                  <Button>Show details</Button>
                </Stack>
              </Box>
            </Box>

            <Box mx={2} mt={10}>
              <Box
                width="40"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                  borderColor: "coolGray.600",
                  backgroundColor: "gray.700",
                }}
                _web={{
                  shadow: 2,
                  borderWidth: 0,
                }}
                _light={{
                  backgroundColor: "gray.50",
                }}
              >
                <Box alignItems={"center"}>
                  <AspectRatio w="90%" ratio={16 / 9}>
                    <Image
                      source={{
                        uri: "https://www.purina-arabia.com/sites/default/files/2022-07/CAT%20CHOW%20ADULT%20Salmon%26Tuna%206x1.5kg%20N2%20XE.jpg",
                      }}
                      alt="image"
                    />
                  </AspectRatio>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="sm" ml="-1">
                      DogFood (afoxolaner) chewwables
                    </Heading>
                  </Stack>

                  <Text fontWeight="400" color={"blue.400"}>
                    $26.99
                  </Text>

                  <Button>Show details</Button>
                </Stack>
              </Box>
            </Box>

            <Box mx={2} mt={10}>
              <Box
                width="40"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                  borderColor: "coolGray.600",
                  backgroundColor: "gray.700",
                }}
                _web={{
                  shadow: 2,
                  borderWidth: 0,
                }}
                _light={{
                  backgroundColor: "gray.50",
                }}
              >
                <Box alignItems={"center"}>
                  <AspectRatio w="90%" ratio={16 / 9}>
                    <Image
                      source={{
                        uri: "https://www.goblespetandgrain.com.au/cdn/shop/products/sd-adult-large-breed-dog-food-dry-productKibble_500_grande.png?v=1564203648",
                      }}
                      alt="image"
                    />
                  </AspectRatio>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="sm" ml="-1">
                      DogFood (afoxolaner) chewwables
                    </Heading>
                  </Stack>

                  <Text fontWeight="400" color={"blue.400"}>
                    $26.99
                  </Text>

                  <Button>Show details</Button>
                </Stack>
              </Box>
            </Box>

            <Box mx={2} mt={10}>
              <Box
                width="40"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                  borderColor: "coolGray.600",
                  backgroundColor: "gray.700",
                }}
                _web={{
                  shadow: 2,
                  borderWidth: 0,
                }}
                _light={{
                  backgroundColor: "gray.50",
                }}
              >
                <Box alignItems={"center"}>
                  <AspectRatio w="90%" ratio={16 / 9}>
                    <Image
                      source={{
                        uri: "https://m.media-amazon.com/images/I/81xyE8OZBqL.jpg",
                      }}
                      alt="image"
                    />
                  </AspectRatio>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="sm" ml="-1">
                      DogFood (afoxolaner) chewwables
                    </Heading>
                  </Stack>

                  <Text fontWeight="400" color={"blue.400"}>
                    $26.99
                  </Text>

                  <Button>Show details</Button>
                </Stack>
              </Box>
            </Box>

           
            
            
          </SimpleGrid>


        </Center>

      </ScrollView>
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
