import React, { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";
import {
  Center,
  ListItem,
  UnorderedList,
  HStack,
  VStack,
  Box,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import RatingStars from "./RatingStars";
import { Switch, Text } from "@chakra-ui/react";

const truncateString = (str: string, numWords: number) => {
  const words = str.split(" ");
  if (words.length > numWords) {
    return words.slice(0, numWords).join(" ") + "...";
  }
  return str;
};

const Item = () => {
  const [Items, setItems] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchItems = async () => {
      try {
        const response = await apiClient.get<any[]>("/", {
          signal: controller.signal,
        });
        setItems(response.data);
      } catch (err: any) {
        if (!(err instanceof CanceledError)) {
          setError(err.message);
        }
      }
    };

    fetchItems();

    return () => controller.abort();
  }, []);

  const toggleDetails = (itemId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, showDetails: !item.showDetails } : item
      )
    );
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <SimpleGrid column={{ sm: 1 }}>
        <VStack alignItems="start" spacing={3}>
          {Items.map((item) => (
            <UnorderedList listStyleType="none">
              <ListItem key={item.id}>
                <HStack
                  justifyContent={"space-evenly"}
                  flexDirection={{ base: "column", md: "row" }}
                  alignItems={{ base: "start", md: "center" }}
                >
                  <Center>
                    <Box
                      w="100px"
                      h="100px"
                      bgImage={`url(${item.image}?w=600&h=400)`}
                      bgSize="cover"
                      bgPos="center"
                      borderRadius="5px"
                      transition="width 0.3s ease, height 0.3s ease"
                      _hover={{
                        w: "150px",
                        h: "150px",
                      }}
                      onClick={() => toggleDetails(item.id)}
                    />
                  </Center>

                  <Text>{truncateString(item.title, 5)}</Text>
                  <HStack>
                    <Switch
                      isChecked={item.showDetails}
                      onChange={() => toggleDetails(item.id)}
                    />
                    {!item.showDetails && <Text>More Info...</Text>}
                  </HStack>
                  {item.showDetails && (
                    <Box
                      bg="white"
                      p="3"
                      borderRadius="md"
                      boxShadow="md"
                      transition="box-shadow 0.3s ease, padding 0.3s ease"
                      _hover={{
                        boxShadow: "lg",
                        p: "6",
                      }}
                    >
                      <Text fontWeight="bold">${item.price}</Text>
                      <Text>S{item.description}</Text>
                      <RatingStars rating={item.rating} />
                      <Text>({item.rating.count})</Text>
                      <Button backgroundColor="#4899B6">Add To Cart</Button>
                    </Box>
                  )}
                </HStack>
              </ListItem>
            </UnorderedList>
          ))}
        </VStack>
      </SimpleGrid>
    </>
  );
};

export default Item;
