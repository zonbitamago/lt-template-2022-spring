import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Sample from "./pages/Sample";
import Top from "./pages/Top";

function Router() {
  return (
    <div>
      <Routes>
        {routeMapping.map((elem, idx) => {
          return <Route path={elem.path} element={elem.element} key={idx} />;
        })}
      </Routes>
    </div>
  );
}

export default Router;

export const routeMapping = [
  {
    path: "/",
    element: <Top />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/sample",
    element: <Sample />,
  },
];
