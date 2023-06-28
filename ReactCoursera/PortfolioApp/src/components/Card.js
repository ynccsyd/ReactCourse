import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  
  return (
    <HStack
      borderRadius="md"
      boxShadow="md"
      p={4}
      spacing={4}
      backgroundColor="white"
    >
      <Image src={imageSrc} alt={title} width={64} height={64} borderRadius="md"/>   
      <VStack align="flex-start" spacing={2} flex={1}>
        <Heading as="h2" size="md" fontWeight="bold" color="black">
          {title}
        </Heading>
        <Text color="black">{description}</Text>
      </VStack>
      <FontAwesomeIcon icon={faArrowRight} size="1x"/>
    </HStack>
  )
  
};

export default Card;
