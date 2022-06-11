import React from 'react';
import './searchItem.css';

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img src="https://t-cf.bstatic.com/xdata/images/hotel/square600/90421609.webp?k=57adc8ea37fac9a4e06aed5c03fddaa73cd4821d9bc0f88a49699a499e136a36&o=&s=1" 
            alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">Address Boulevard</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                    Studio Appartement with Air conditionning
                </span>
                <span className="siFeatures">
                    Entire apartment • 1 bedroom • 1 living room • 1 bathroom • 1 kitchen • 72m²
                </span>
                <span className="siCancelOp">
                    Free cancellation
                </span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today.
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailText">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
            
        </div>
    );
};

export default SearchItem;