//Auth
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

//Home
import Home from './pages/Home/Home';

export const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
]