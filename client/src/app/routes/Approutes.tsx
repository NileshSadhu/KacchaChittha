import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const AppRoutes = () => {
    return <RouterProvider router={router} />;
}

export default AppRoutes;