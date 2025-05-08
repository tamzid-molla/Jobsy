import { FaUserEdit, FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../AuthContext/GoogleContext';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router';

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email, photoURL } = user;

  useEffect(() => {
    document.title = "Profile | JOB S Y ";
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center">
          {photoURL ? (
            <img
              src={photoURL}
              alt="Profile"
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
          ) : (
            <FaUserCircle className="w-32 h-32 text-gray-400 mb-4" />
          )}
          <h1 className="text-2xl font-bold text-gray-800">{displayName}</h1>
          <p className="text-gray-600 mb-6">{email}</p>
          <Link to="/updateprofile">
            <button
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              <FaUserEdit />
              Update Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;