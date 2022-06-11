import React from 'react';
import './testimonials.scss';

const Testimonials = () => {

    const data = [
        {
            id: 1,
            name: 'Alex Selemia',
            title: "Co-Founder of AMAZON",
            img: "https://media.istockphoto.com/photos/portrait-of-a-young-black-man-at-home-picture-id1329737171?b=1&k=20&m=1329737171&s=170667a&w=0&h=DVhBXOrVnCW7roPhOUJdvSY2-yca2ReyUF7xqtwYw-M=",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolor!",
            featured: true,
            icon: "assets/youtube.png",
        },
        {
            id: 2,
            name: 'Maria Silva',
            title: "Co-Founder of AMAZON",
            img: "https://media.istockphoto.com/photos/portrait-of-young-woman-smiling-picture-id1304581885?b=1&k=20&m=1304581885&s=170667a&w=0&h=B7KElxD35m6lKn6R7aeKb70Lyft_fpf6CkuXRdUyBzI=",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolor!",
            featured: true,
            icon: "assets/youtube.png",
        },
        {
            id: 3,
            name: 'Souleyman',
            title: "Co-Founder of IBM",
            img: "https://media.istockphoto.com/photos/portrait-of-a-japanese-jeweler-and-silversmith-in-his-workshop-picture-id1322271908?b=1&k=20&m=1322271908&s=170667a&w=0&h=e4DyE5Loyq5TLrPKDxswxibof8MsKo6xzmcSgRYJVfY=",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolor!",
            featured: true,
            icon: "assets/youtube.png",
        },
    ]

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>


            <div className="container">
                {data.map((data) => (
                    <div className={data.featured ? "card featured card" : "card"}>
                        <div className="top">
                            <img src="assets/right-arrow.png" className="left" alt="" />
                            <img 
                                src={data.img}
                                alt="" 
                                className="user"
                                />
                            <img src={data.icon} className="right" alt="" />
                        </div>
                        <div className="center">
                            {data.desc}
                        </div>
                        <div className="bottom">
                            <h3>{data.name}</h3>
                            <h4>{data.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default Testimonials;