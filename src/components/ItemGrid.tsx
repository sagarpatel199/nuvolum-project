import Item from "./Item";
import { HStack, VStack } from "@chakra-ui/react";

const ItemGrid = () => {
  return (
    <VStack>
      <HStack>
        <Item />
      </HStack>
    </VStack>
  );
};

export default ItemGrid;
