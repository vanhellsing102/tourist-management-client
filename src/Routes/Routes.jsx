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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allTouristsSpot',
                element: <AllTouristSpot></AllTouristSpot>, 
                loader: () => fetch('http://localhost:5000/spots')
            },
            {
                path: '/addTouristSpot',
                element: <AddTouristSpot></AddTouristSpot>
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
                loader: ({params}) => fetch(`http://localhost:5000/spots/${params.id}`)
            },
            {
                path: '/list',
                element: <MyList></MyList>,
                loader: () => fetch('http://localhost:5000/spots')
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({params}) => fetch(`http://localhost:5000/spots/${params.id}`)
            }
        ]
    }
])

export default router;