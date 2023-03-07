import { createBrowserRouter } from "react-router-dom";
import Detalle from "../Components/Detalle";
import Main from "../Components/Main";
import Layout from "../Layouts/Layout";
import NotFound from "../Pages/NotFound";
import Update from "../Pages/Update";

export default createBrowserRouter([
    {
        path:'/',
        element: <Layout />,
        errorElement: <NotFound />,
        children:[
            {
                index: true,
                element: <Main />
            },
            {
                path:'producto/:id',
                element: <Detalle />
            },
            {
                path:'producto/:id/edit',
                element: <Update />
            }
        ]
    }
]);