import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../../pages/web/LandingPage";

export const router = createBrowserRouter([
    // Web
    {
        path: "/",
        element: <LandingPage />
    },

    // login
    {
        path: "/auth"
    },

    // Not Foun 404
    {
        path: '*'
    }
]);