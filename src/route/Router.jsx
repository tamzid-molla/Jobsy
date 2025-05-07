
import { createBrowserRouter } from 'react-router';
import Root from '../root/Root';
import HomePage from '../pages/HomePage';
import DetailsPage from '../pages/DetailsPage';
import About from '../components/About';
import Terms from '../components/Terms';
import Blogs from '../components/Blogs';
import CommingSoon from '../ExtraPage/CommingSoon';
import Login from '../components/Login';
import Register from '../components/Register';
import PrivateRoute from '../AuthContext/PrivateRoute';
import ErrorPage from '../pages/ErrorPage';
import ForgotPassword from '../pages/ForgotPassword';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: "/about",
                Component: About
            },
            {
                path: "/Terms",
                Component: Terms
            },
            {
                path: "/blogs",
                Component: Blogs
            },
            {
                path: "/details/:id",
                loader:()=>fetch("/jobs.json"),
                element: <PrivateRoute>
                    <DetailsPage></DetailsPage>
                </PrivateRoute>,
                hydrateFallbackElement: <p>Loading............</p>
            },
            {
                path: "/commingsoon",
                Component: CommingSoon
            },
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/register",
                Component: Register
            },
            {
                path: "/resetPass",
                Component: ForgotPassword
            },
            {
                path: "*",
                Component: ErrorPage
            }
        ]
    },
])