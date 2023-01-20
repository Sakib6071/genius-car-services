import React from 'react';

const Footer = () => {
    const date = new Date()
    return (
        <footer className='py-5 bg-black text-white text-center mt-5'>
            <p>&#169;Copyright {date.getFullYear()}</p>
        </footer>
    );
};

export default Footer;