import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            {/* les images importees depuis la balise IMG sont accessible dans "public"*/}
            <img src="./logo192.png" alt="react logo" />
            <h3>React World</h3>
        </div>
    );
};

export default Logo;