import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {sID}=useParams()
    return (
        <div>
            <p>This is service detail {sID}</p>
            <Link to={"/checkout"}>Proceed Checkout</Link>
        </div>
    );
};

export default ServiceDetail;