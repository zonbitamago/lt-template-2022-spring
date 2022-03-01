import { Box, Grid, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Top = () => {
  return (
    <Layout isTop={true}>
      <VStack color="white" h="100vh">
        <Box h="50%" w="100%" sx={{ position: "relative" }}>
          <Heading
            as="h1"
            size="4xl"
            h="100%"
            sx={{ textAlign: "left", position: "absolute", bottom: "-40%" }}>
            Welcome to <br />
            the homepage!
          </Heading>
        </Box>
        <Box h="50%" w="100%">
          <Heading size="xl" sx={{ textAlign: "right" }}>
            所属　名前
          </Heading>
        </Box>
      </VStack>
    </Layout>
  );
};

export default Top;
