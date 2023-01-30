import React from 'react';

const Expert = ({expert}) => {
    const{name,image}=expert
    return (
        <div id='experts' className='border-2 border-gray-500 text-center rounded-lg shadow-md mx-5'>
        <img className=' w-full rounded-t-lg' src={image}/>
        <h2 className='text-2xl p-1 font-semibold'>{name}</h2>
    </div>
    );
};

export default Expert;