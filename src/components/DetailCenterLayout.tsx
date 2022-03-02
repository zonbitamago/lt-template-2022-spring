import { Center } from "@chakra-ui/react";
import React from "react";

const DetailCenterLayout: React.FC = ({ children }) => {
  return (
    <Center h="100%" w="100%">
      {children}
    </Center>
  );
};

export default DetailCenterLayout;
