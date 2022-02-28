import { Button, IconButton } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
