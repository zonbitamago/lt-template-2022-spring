import { Center, Grid, IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isPageForwardState } from "../recoil/isPageForwardStateAtom";
import { routeMapping } from "../Router";

const Layout: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isPageForward, setIsPageForward] = useRecoilState(isPageForwardState);
  const [backPage, setBackPage] = useState("");
  const [forwardPage, setForwardPage] = useState("");

  useEffect(() => {
    const pathname = location.pathname;
    const routerIndex = routeMapping.findIndex((elem) => {
      return elem.path === pathname;
    });

    const forwardPagePath =
      routerIndex + 1 === routeMapping.length
        ? ""
        : routeMapping[routerIndex + 1].path;

    const backPagePath =
      routerIndex === 0 ? "" : routeMapping[routerIndex - 1].path;

    setForwardPage(forwardPagePath);
    setBackPage(backPagePath);
  }, [location]);
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
        }}>
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
                navigate(backPage);
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
                navigate(forwardPage);
              }}
            />
          </Center>
        </Grid>
      </motion.div>
    </div>
  );
};

export default Layout;
