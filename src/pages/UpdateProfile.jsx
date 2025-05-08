import React, { useContext, useEffect, } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../AuthContext/GoogleContext';
import { updateProfile } from 'firebase/auth';
import { auth } from '../FireBase/Firebase_init';
import { useNavigate } from 'react-router';


const UpdateProfile = () => {
    const navigate = useNavigate()
    const { setPhotoUrl, setName, user } = useContext(AuthContext);
    const { photoURL } = user;

  const handleUpdate = (e) => {
      e.preventDefault();
      const userName = e.target.name.value;
      const userPhoto = e.target.photo.value;

      updateProfile(auth.currentUser, {
        displayName: userName, photoURL: userPhoto
      }).then(() => {
          setPhotoUrl(userPhoto)
          setName(userName)
      }).catch((error) => {
        alert(error)
      });
  };

  useEffect(() => {
      document.title= "Update Profile | JOB S Y "
    },[])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Profile</h2>
        
        <div className="flex justify-center mb-6">
          {photoURL ? (
            <img
              src={photoURL}
              alt="Profile"
              className="w-28 h-28 p-1 bg-primary rounded-full object-cover"
            />
          ) : (
            <FaUserCircle className="w-24 h-24 text-gray-400" />
                  )}
        </div>

              <form
                  onSubmit={(e)=>handleUpdate(e)}
                  className="space-y-4">
          <div>
            <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="url"
                          id="photoURL"
                          name='photo'
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
                          id="name"
                          name='name'
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your Name"
            />
          </div>

          <button onClick={()=>navigate("/")}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;