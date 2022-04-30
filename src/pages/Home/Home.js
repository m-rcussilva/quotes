import FeedContainer from "../../components/FeedContainer/FeedContainer";
import Nav from "../../components/Nav/Nav";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";

const Home = () => {
    return (
        <div className="Home">
            <Nav />
            <div className="Home-container">
                <Sidebar />
                <FeedContainer />
            </div>
        </div>
    );
};

export default Home;
