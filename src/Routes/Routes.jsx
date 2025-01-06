import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home/Home";
import AllTouristSpot from "../components/AllTouristsSpot/AllTouristSpot";
import AddTouristSpot from "../components/AddTouristSpot/AddTouristSpot";
import Register from "../components/LogInformation/Register";
import Login from "../components/LogInformation/Login";
import CardDetails from "../components/AllTouristsSpot/CardDetails";
import MyList from "../components/MyList/MyList";
import Update from "../components/MyList/Update";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import CountryCardSection from "../components/Home/CountryCardSection";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://tourist-management-server-gxvh13zvz-murads-projects-e024a269.vercel.app/country')
            },
            {
                path: '/allTouristSpot',
                element: <PrivateRoutes><AllTouristSpot></AllTouristSpot></PrivateRoutes>, 
                loader: () => fetch('https://tourist-management-server-5kv3ldbcf-murads-projects-e024a269.vercel.app')
            },
            {
                path: '/addTouristSpot',
                element: <PrivateRoutes><AddTouristSpot></AddTouristSpot></PrivateRoutes>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/details/:id',
                element: <CardDetails></CardDetails>,
                loader: ({params}) => fetch(`https://tourist-management-server-5kv3ldbcf-murads-projects-e024a269.vercel.app/${params.id}`)
            },
            {
                path: '/list',
                element: <PrivateRoutes><MyList></MyList></PrivateRoutes>,
                loader: () => fetch('https://tourist-management-server-5kv3ldbcf-murads-projects-e024a269.vercel.app')
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({params}) => fetch(`https://tourist-management-server-5kv3ldbcf-murads-projects-e024a269.vercel.app/${params.id}`)
            },
            {
                path: '/country-card-section/:id',
                element: <CountryCardSection></CountryCardSection>,
                loader: ({params}) => fetch(`https://tourist-management-server-gxvh13zvz-murads-projects-e024a269.vercel.app/country/${params.id}`)
            },
        ]
    }
])

export default router;