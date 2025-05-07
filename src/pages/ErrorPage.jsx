
import { Link } from 'react-router';
import PageTitle from '../components/PageTitle';

const ErrorPage = () => {
    
    return (
      <div>
        <PageTitle title={"404 Error"} ></PageTitle>
            <div className="pb-20">
      <div className="flex pb-10 flex-col items-center justify-center text-center min-h-[70vh] py-10 bg-white rounded-2xl">
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="404 Error"
          className="w-[350px] md:w-[500px] mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto">
          Looks like the page you are trying to visit doesn’t exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white text-lg rounded-2xl"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
        </div>
    );
};

export default ErrorPage;