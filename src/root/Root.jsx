import React from 'react';
import Nav from '../components/Nav';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';


const Root = () => {
    return (
        <div className="bg-[#FFFFFF]">
                <Nav></Nav>
            <main> <Outlet>
            </Outlet> </main>
            <footer><Footer></Footer> </footer>
            <ToastContainer></ToastContainer>
            </div>
    );
};

export default Root;