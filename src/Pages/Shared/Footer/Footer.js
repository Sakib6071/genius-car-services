import React from 'react';

const Footer = () => {
    const date = new Date()
    return (
        <footer>
            <p>&#169;Copyright {date.getFullYear()}</p>
        </footer>
    );
};

export default Footer;