import React from 'react';

const Header = () => {
    return (
        <header>
            <div className='grid grid-cols-5 py-5 bg-green-500'>
                <div className='col-span-2 text-center'>
                    <p className=' text-3xl font-bold'>LOGO</p>
                </div>
                <div className=' col-span-3 grid grid-cols-4'>
                <div><p className='text-xl font-semibold'>Home</p></div>
                <div><p className='text-xl font-semibold'>About</p></div>
                <div><p className='text-xl font-semibold'>Service</p></div>
                <div><p className='text-xl font-semibold'>Contact Us</p></div>
                </div>
            </div>
        </header>
    );
};

export default Header;