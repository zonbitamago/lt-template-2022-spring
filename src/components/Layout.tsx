import { IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <motion.div
        animate={{
          x: 0,
          opacity: 1,
        }}
        initial={{
          x: 100,
          opacity: 0,
        }}
        exit={{
          x: -100,
          opacity: 0,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <IconButton
          aria-label="back"
          icon={<IoIosArrowBack size="1.5em" />}
          colorScheme="pink"
          borderRadius={"50%"}
          p="1"
          m="1"
        />
        <IconButton
          aria-label="forward"
          icon={<IoIosArrowForward size="1.5em" />}
          colorScheme="pink"
          borderRadius={"50%"}
          p="1"
          m="1"
        />
        {children}
      </motion.div>
    </div>
  );
};

export default Layout;
