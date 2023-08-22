import React from 'react';
import PaymentMethod from './presentationals/PaymentMethod';

import './styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <p>Copyright © 2023 Meme Beer Pvt. Ltd. All Rights Reserved.</p>
            <PaymentMethod />
        </footer>
    );
};

export default Footer;
