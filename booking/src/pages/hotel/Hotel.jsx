import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import './hotel.css';

const Hotel = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const photos =  [
        {
            src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/90424796.jpg?k=8beaa39dff3dbc6d7a6a3e7ab538d3201a1a67dfed400aa3a4f74593aa4bf529&o=&hp=1'
        },
        {
            src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/89017984.jpg?k=461a359420a363d085095c3756e538c3286d6ed454a471d52e26e9b4d4ede171&o=&hp=1'
        },
        {
            src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/89018002.jpg?k=4f5b5f7996bd5d82e34657166458e2eeca20e99866be2a8a21f6a8506a121257&o=&hp=1'
        },
        {
            src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/98778295.jpg?k=516c162a28943d842e422d372733edaa2d1f77e10c6e647c370c4e61c5ed0ce6&o=&hp=1'
        },
        {
            src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/91585074.jpg?k=dc48ee0142b2434d74510699a8d5db6d2b91aeaf3207ad6fc57a9d911efa558e&o=&hp=1'
        },
        {
            src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/151582240.jpg?k=c8777d3efdd7d592fcb53684229cb5ec78bf899adeff0a6a80fc2e4c4f776760&o=&hp=1'
        }
    ]

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    }

    const handleMove = (direction) => {
        let newSlideNumber;

        if(direction ==="l"){
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber -1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0: slideNumber + 1
        }

        setSlideNumber(newSlideNumber)

    }

    return (
        <div>
            <Navbar />
            <Header type="list"/>
            <div className="hotelContainer">
                { open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() =>setOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")}/>
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImg"/>
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")}/>
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Grand hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Sheikh Mohamed Bin Rashid Boulevard, Downtown Dubai, PO Box 214477</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location - show map
                    </span>
                    <span className="hotelPriceHighLight">
                        Book a stay over RUB 71,728 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photos, i) =>(
                            <div className="hotelImgWrapper">
                                <img onClick={() =>handleOpen(i)} src={photos.src} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of Dubai </h1>
                            <p className="hotelDesc">
                                With direct indoor access to both Dubai Mall, Fashion Avenue and the Metro Station, 
                                Address Boulevard is the ideal place to stay for anyone coming to Dubai for leisure, business or shopping purposes. 
                                It offers 3 swimming pools with amazing views of Burj Khalifa and Downtown Dubai.

                                All rooms and suites are filled with calm neutral tones. 
                                The spacious living and sleeping areas melt perfectly into each other, 
                                complemented by elegant architecture and state-of-the-art technology with lights,
                                temperature and even room service controlled by an iPad.

                                The Restaurant at Address offers a truly gastronomical experience, in a homely style atmosphere, where the restaurant is laid out like a private home with a lounge, kitchen, 
                                library, and art room sections. The lounge offers a sophisticated variety of sandwiches, scones and macaroons with a large selection of signature blends of tea. 
                                The library feeling stretches throughout the hotel and into the hotel bar with its smoking room surrounded by books. There is also a shisha lounge around the pool.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 19-night stay!</h1>
                            <span>
                                Situated in the real heart of Dubai, this hotel has an excellent location score of 9.
                            </span>
                            <h2>
                                <b>$945</b> for 19 nights.
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    );
};

export default Hotel;