import FeedContainer from "../../components/FeedContainer/FeedContainer";
import Nav from "../../components/Nav/Nav";
import "./Home.css";
import "./Home-media-queries.css";

const Home = () => {
    return (
        <div className="Home">
            <Nav />
            <div className="Home-container">
                <FeedContainer />
            </div>
        </div>
    );
};

export default Home;
