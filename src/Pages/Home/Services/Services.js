import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
   const [services,setServices]=useState([])
   useEffect(()=>{
    fetch('services.json')
    .then(res=>res.json())
    .then(data=>setServices(data))
   },[])
    return (
        <div>
            <p className='text-5xl text-green-600 text-center my-10 font-bold'>Our Services</p>
            <div className='grid grid-cols-1 p-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                services.map(service=><Service
                key={service.id}
                service = {service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;