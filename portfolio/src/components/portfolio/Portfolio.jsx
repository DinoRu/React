import React, { useState, useEffect} from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';
import {
    featuredPortfolio, webPortfolio,
    mobilePortfolio, designPortfolio,
    contentPortfolio,
} from '../../data';

const Portfolio = () => {

    const [selected, setSelected] = useState('features');
    const [data, setData] = useState([]);
    const list = [
        {
            id: 'web',
            title: 'Web App',
        },
        {
            id: 'features',
            title: 'Features',
        },
        {
            id: 'mobile',
            title: 'Mobil App',
        },
        {
            id: 'design',
            title: 'Design',
        },
        {
            id: 'branding',
            title: 'Branding',
        },
    ]

    useEffect(() => {
        switch (selected) {
            case 'features':
                setData(featuredPortfolio);
                break;
            case 'web':
                setData(webPortfolio);
                break;
            case 'mobile':
                setData(mobilePortfolio);
                break;
            case 'design':
                setData(designPortfolio);
                break;
            case 'content':
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }

    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected}
                    id={item.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map((data)=> (
                    <div className="item">
                        <img 
                            src={data.img}
                            alt=""
                        />
                        <h3>{data.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;