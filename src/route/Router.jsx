
import { createBrowserRouter } from 'react-router';
import Root from '../root/Root';
import HomePage from '../pages/HomePage';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: HomePage
            }
        ]
    }
])