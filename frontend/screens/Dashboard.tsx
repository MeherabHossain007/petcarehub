import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";

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
import axios from "axios";
import Config from "../config/config";

interface Product {
  id: number;
  title: string;
  price: string;
  stock: string;
  photo: string;
  // Add other fields as needed
}

const Dashboard = ({ navigation }: { navigation: any }) => {
  const [service, setService] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get(`${Config.localhost}:3000/shop`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
      });
  }, []);

  const sortByPrice = (products: Product[], order: string) => {
    const sortedProducts = [...products];

    if (order === "lowHigh") {
      sortedProducts.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (order === "highLow") {
      sortedProducts.sort((a, b) => Number(b.price) - Number(a.price));
    }

    setProducts(sortedProducts);
  };

  return (
    <>
      <ScrollView mb={2}>
        <Center>
          <Box maxW="full" width="100%" mt={16} px={10}>
            <Select
              selectedValue={service}
              minWidth="200"
              height={50}
              accessibilityLabel="Sort by"
              placeholder="Sort by"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => {
                sortByPrice(products, itemValue);
              }}
            >
              <Select.Item label="Price (low to high)" value="lowHigh" />
              <Select.Item label="Price (high to low)" value="highLow" />
            </Select>
          </Box>
        </Center>
        <Center>
          <SimpleGrid columns={2}>
            {products.map((product) => (
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
                    <AspectRatio w="90%" ratio={16 / 9} mt={3}>
                      <Image
                        source={{
                          uri: `${product.photo}`,
                        }}
                        alt="image"
                      />
                    </AspectRatio>
                  </Box>
                  <Stack p="4" space={3}>
                    <Stack space={2}>
                      <Heading size="sm" ml="-1">
                        {product.title}
                      </Heading>
                    </Stack>
                    <Text fontWeight="400" color={"blue.400"}>
                      ৳{product.price}
                    </Text>
                    <Button onPress={() => navigation.navigate("Details", {prod: product})}>
                      Show details
                    </Button>
                  </Stack>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Center>
      </ScrollView>
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
