import { createBrowserRouter } from "react-router";
import Rootlayout from "../layouts/Rootlayout";
import Homepage from "../pages/user pages/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout></Rootlayout>,
    children: [{ index: true, element: <Homepage></Homepage> }],
  },
]);
