import React, { useEffect } from 'react';

const DetailsPage = () => {
    useEffect(() => {
            document.title = "details"; 
        },[])
    return (
        <div>
            <h1>I am details</h1>
        </div>
    );
};

export default DetailsPage;