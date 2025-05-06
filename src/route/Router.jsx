
import { createBrowserRouter } from 'react-router';
import Root from '../root/Root';
import HomePage from '../pages/HomePage';
import DetailsPage from '../pages/DetailsPage';
import About from '../components/About';
import Terms from '../components/Terms';
import Blogs from '../components/Blogs';

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
                Component: DetailsPage,
                hydrateFallbackElement: <p>Loading............</p>
            }
        ]
    }
])