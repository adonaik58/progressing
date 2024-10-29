import { createBrowserRouter } from "react-router-dom";
import Welcome from "../pages/welcome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <p>Simple test</p>,
  },
  {
    path: "/welcome",
    element: <Welcome />,
  },
]);
