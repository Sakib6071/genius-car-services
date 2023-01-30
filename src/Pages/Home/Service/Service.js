import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {name, img, description,price,id}=service
    const navigate = useNavigate()
    const handleAddService=(id)=>{
        const url = `/service-detail/${id}`
        navigate(url)
    }
    return (
        <div id='services' className='border-2 border-gray-500 text-center rounded-lg shadow-md'>
            <img className=' w-full rounded-t-lg' src={img}/>
            <h2 className='text-2xl p-1 font-semibold'>{name}</h2>
            <p className='text-xl p-1'>{price}</p>
            <p className=' p-1 mb-5'><small>{description}</small></p>
            <button onClick={()=>handleAddService(id)} className=' w-full bg-green-600 py-2 text-white rounded-b-lg font-semibold'>Add service ({name})</button>
        </div>
    );
};

export default Service;