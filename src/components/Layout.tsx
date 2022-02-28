import { Center, Grid, IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isPageForwardState } from "../recoil/isPageForwardStateAtom";

const Layout: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const [isPageForward, setIsPageForward] = useRecoilState(isPageForwardState);
  return (
    <div>
      <motion.div
        animate={{
          x: 0,
          opacity: 1,
        }}
        initial={{
          x: isPageForward ? 100 : -100,
          opacity: 0,
        }}
        exit={{
          x: isPageForward ? -100 : 100,
          opacity: 0,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <Grid templateColumns={"48px 1fr 48px"} height="100vh">
          <Center>
            <IconButton
              aria-label="back"
              icon={<IoIosArrowBack size="1.5em" />}
              colorScheme="pink"
              borderRadius={"50%"}
              p="1"
              m="1"
              width={"32px"}
              height={"40px"}
              onClick={() => {
                setIsPageForward(false);
                navigate("/");
              }}
            />
          </Center>
          <div>{children}</div>
          <Center>
            <IconButton
              aria-label="forward"
              icon={<IoIosArrowForward size="1.5em" />}
              colorScheme="pink"
              borderRadius={"50%"}
              p="1"
              m="1"
              width={"32px"}
              height={"40px"}
              onClick={() => {
                setIsPageForward(true);
                navigate("/about");
              }}
            />
          </Center>
        </Grid>
      </motion.div>
    </div>
  );
};

export default Layout;
