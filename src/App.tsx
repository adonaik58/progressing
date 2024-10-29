import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";
import Config from "./variables/app.default";
import "./App.css";

const root = document.documentElement;

// Set CSS variables based on config
root.style.setProperty("--color", Config.appearance.colors);
root.style.setProperty("--heading_colors", Config.appearance.heading_colors);
root.style.setProperty("--background", Config.appearance.background);

export default <RouterProvider router={router} />;
