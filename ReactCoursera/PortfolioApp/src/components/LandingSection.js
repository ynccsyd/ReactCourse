import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} >
      <Avatar size="2xl" src="https://i.pravatar.cc/150?img=7"/>
      <Heading as="h1" size="xl" color="white" textAlign="center">
        {greeting}
      </Heading>
      <Heading as="h2" size="md" color="white" textAlign="center">
        {bio1}
      </Heading>
      <Heading as="h2" size="md" color="white" textAlign="center">
        {bio2}
      </Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
