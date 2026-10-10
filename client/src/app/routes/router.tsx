import { createBrowserRouter } from "react-router-dom";
import WebLayout from "../layouts/WebLayout";
import LandingPage from "../../pages/web/LandingPage";
import PricingPage from "../../pages/web/PricingPage";
import ContactPage from "../../pages/web/Contactpage";
import NotFoundPage from "../../pages/NotFoundPage";

export const router = createBrowserRouter([
    // Web Layout (Navbar and Footer always present, inside content changes dynamically)
    {
        element: <WebLayout />,
        children: [
            {
                path: "/",
                element: <LandingPage />
            },
            {
                path: "/pricing",
                element: <PricingPage />
            },
            {
                path: "/contact",
                element: <ContactPage />
            },
            // Not Found 404 inside WebLayout
            {
                path: "*",
                element: <NotFoundPage />
            }
        ]
    },

    // login
    {
        path: "/auth"
    }
]);