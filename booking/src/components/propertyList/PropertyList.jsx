import React from 'react';
import './propertyList.css';

const PropertyList = () => {
    return (
        <div className="pList">
            <div className="pListItem">
                <img src="https://t-cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>856.930 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Appartements</h1>
                    <h2>856.930 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Resorts</h1>
                    <h2>17.805 resorts</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-holidayhomes_300/604c7484d34a9e8791c2d5a0e2df4bc8c803dc7c.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Holidays homes</h1>
                    <h2>422,612 holidays homes</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_guest_house/70618d86d515349ce56296a56d2eaaf283fd1542.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Guest Houses</h1>
                    <h2>101,705 guest houses</h2>
                </div>
            </div>
        </div>
    );
};

export default PropertyList;