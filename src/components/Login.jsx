import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEnvelope, FaLock, FaGoogle, FaExclamationCircle } from 'react-icons/fa';
import { AuthContext } from '../AuthContext/GoogleContext';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../FireBase/Firebase_init';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, setUser } = useContext(AuthContext); 
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password).then(res => {
      setUser(res.user)
      navigate(`${location?.state? location.state:"/"}`)
    }).catch(error => setError(error.message))
  };

  const provider =new GoogleAuthProvider()
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider).then(res => {
      setUser(res.user)
      navigate(`${location?.state? location.state:"/"}`)
    }).catch(error => {
     setError(error.message)
   })
  };


  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);
  
  useEffect(() => {
      document.title= "Login | JOB S Y "
    },[])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
    
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>

        {error && (
          <div className="flex items-center bg-red-100 text-red-700 p-3 rounded mb-4">
            <FaExclamationCircle className="mr-2" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="flex items-center border rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
              <FaEnvelope className="ml-3 text-gray-400" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2.5 border-none rounded-lg focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="flex items-center border rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
              <FaLock className="ml-3 text-gray-400" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2.5 border-none rounded-lg focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex justify-end mb-5">
            
            <button type='button' onClick={()=> navigate("/resetPass",{ state: email}) } className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </button>
           
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2.5 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </div>

        <div className="mt-6">
          <p className="text-center text-sm text-gray-600 mb-3">Or login with</p>
          <div className="flex justify-center">
            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center w-full bg-white border border-gray-300 text-gray-700 p-2.5 rounded-lg hover:bg-gray-50 transition duration-200"
            >
              <FaGoogle className="mr-2 text-red-500" />
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;