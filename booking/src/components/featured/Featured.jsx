import React from 'react';
import "./featured.css"
const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img 
                    src="https://t-cf.bstatic.com/xdata/images/hotel/square600/263174177.webp?k=55e213eb97f3174135bc93c269767d941b928f5b41709bba17531712f0db114a&o=&s=1" alt="S.P" 
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Prague</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img 
                    src="https://t-cf.bstatic.com/xdata/images/hotel/square600/123731236.webp?k=1248cbb02f0fb216143e9f5d46aa5e47b903e686154b41bdf86d1c193d5c34e1&o=&s=1" alt="S.P" 
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>New York</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img 
                    src="https://t-cf.bstatic.com/xdata/images/hotel/square600/195592975.webp?k=812a6bca877dab1b722a10d05ba45695261760032758e71be48dc80391a7735a&o=&s=1" alt="S.P" 
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Paris</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
        </div>
    );
};

export default Featured;