import React, { useState} from 'react';
import './works.scss';

const Works = () => {

    const [currentSlide , setCurrentSlide] = useState(0);
    const data = [
        {
            id: 1,
            icon: "./assets/globe.png",
            title: "Social Media App",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, explicabo",
            img:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
          },
          {
            id: 2,
            icon: "./assets/globe.png",
            title: "Rampa UI Design",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, placeat",
            img:
              "https://cdn.dribbble.com/users/702789/screenshots/15054318/media/4ea5d492b7b07eebc9528ff960794879.png?compress=1&resize=1200x900",
          },
          {
            id: 3,
            icon: "./assets/writing.png",
            title: "E-commerce Web Design",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dignissimos!",
            img:
              "https://cdn.dribbble.com/users/1387827/screenshots/15466426/media/deb2dca6762cd3610321c98bfccb0b72.png?compress=1&resize=1200x900",
          },
    ]

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1: 2):
        setCurrentSlide(currentSlide<data.length - 1 ? currentSlide + 1: 0)
    }
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map((data) => (

                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={data.icon} alt="" />
                                    </div>
                                    <h2>{data.title}</h2>
                                    <p>
                                        {data.desc}
                                    </p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img 
                                    src="https://media.istockphoto.com/photos/front-end-banner-picture-id1320307051?b=1&k=20&m=1320307051&s=170667a&w=0&h=RepHHCKxxDEIHIfDgjldGCzimaUSErbg9XyM30Qivko=" 
                                    alt="" />
                            </div>
                        </div>
                    </div>
                ))};
            </div>
            <img src="assets/arrow.png" alt="" className="arrow left" onClick={() =>handleClick("left")}/>
            <img src="assets/arrow.png" alt="" className="arrow right" onClick={() =>handleClick("right")}/>
        </div>
    );
};

export default Works;