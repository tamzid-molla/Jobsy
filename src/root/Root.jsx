
import Nav from '../components/Nav';
import { Outlet,} from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext/GoogleContext';

const Root = () => {
  const { isLoading,user } = useContext(AuthContext);

    return (<>
        {
            user && isLoading ? (
                <div className="h-screen flex justify-center items-center">
                <span className="loading loading-bars loading-xs"></span>
<span className="loading loading-bars loading-sm"></span>
<span className="loading loading-bars loading-md"></span>
<span className="loading loading-bars loading-lg"></span>
<span className="loading loading-bars loading-xl"></span>
            </div>
            
            ): (
                    
         <div className="bg-[#FFFFFF]">
                <Nav></Nav>
            <main> <Outlet>
            </Outlet> </main>
            <footer><Footer></Footer> </footer>
            <ToastContainer></ToastContainer>
            </div>
            )
        }
    </>
    );
};

export default Root;