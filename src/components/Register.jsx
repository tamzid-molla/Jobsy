import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { FaUser, FaEnvelope, FaImage, FaLock, FaGoogle, FaExclamationCircle } from 'react-icons/fa';
import { AuthContext } from '../AuthContext/GoogleContext';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../FireBase/Firebase_init';
import { toast } from 'react-toastify';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { signInEmailPassword,setUser,user} = useContext(AuthContext);

  const uppercase = /[A-Z]/;
  const lowercase = /[a-z]/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user) {
      setError("User Already Login")
      return
    }
    if (!uppercase.test(password)) {
      setError("Password must include at least one uppercase letter");
      return 
    }
    if (!lowercase.test(password)) {
      setError("Password must include at least one lowercase letter");
      return 
    }

    signInEmailPassword(email, password)
      .then(result => {
        setUser(result.user);
        navigate(`${location?.state ? location.state : "/"}`);
    }).catch(error => setError(error.message))
    
  };

   const provider =new GoogleAuthProvider()
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider).then(res => {
          setUser(res.user)
          navigate(`${location?.state? location.state:"/"}`)
          toast.success("Google SignUp Successfully");
        }).catch(error => {
         setError(error.message)
       })
  };

  // Clear error message after 5 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  useEffect(() => {
          document.title = `register`; 
      },[])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Register</h2>

        {error && (
          <div className="flex items-center bg-red-100 text-red-700 p-3 rounded mb-4">
            <FaExclamationCircle className="mr-2" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <div className="flex items-center border rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
              <FaUser className="ml-3 text-gray-400" />
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2.5 border-none rounded-lg focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
          </div>

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
            <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Photo URL
            </label>
            <div className="flex items-center border rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
              <FaImage className="ml-3 text-gray-400" />
              <input
                type="url"
                id="photoUrl"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                className="w-full p-2.5 border-none rounded-lg focus:outline-none"
                placeholder="Enter your photo URL"
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
            <p className="text-xs text-gray-600 mt-2">
              Password must contain at least 6 characters, one uppercase, and one lowercase letter.
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2.5 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Register
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>

        <div className="mt-6">
          <p className="text-center text-sm text-gray-600 mb-3">Or register with</p>
          <div className="flex justify-center">
            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center w-full bg-white border border-gray-300 text-gray-700 p-2.5 rounded-lg hover:bg-gray-50 transition duration-200"
            >
              <FaGoogle className="mr-2 text-red-500" />
              Register with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;