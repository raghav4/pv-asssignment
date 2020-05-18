import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className="text-center justify-content-center my-5 mx-5">
        <p>The page you are looking for does not exist</p>
        <p>
          Return Back to
          <Link to="/"> Home</Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
