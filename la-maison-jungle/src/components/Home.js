import '../styles/Home.css';
import logo from '../assets/logo.png';

const Home = () => {
    const title = "La maison Jungle";
    return (
        <div className="home">
            <img src={logo} alt="logo" className="home-logo" />
            <h1 className="home-title">{title}</h1>
        </div>
    )
}
export default Home