import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    // Web
    {
        path: "/"
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