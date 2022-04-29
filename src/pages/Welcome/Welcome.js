import WelcomeAsideImg from "../../assets/images/welcome-aside-img.png";
import "./Welcome.css";

const Welcome = () => {
    return (
        <div className="Welcome">
            <div className="Welcome-container-left">
                <h2 className="Welcome-text">
                    Welcome to <span>Quotes</span>. A website where you can save
                    your favorites quotes.
                </h2>

                <div className="Welcome-container-btn">
                    <button className="Welcome-btn" id="Welcome-btn-signIn">
                        Sign In
                    </button>
                    <button className="Welcome-btn" id="Welcome-btn-signUp">
                        Sign Up
                    </button>
                </div>
            </div>

            <div className="Welcome-container-right">
                <img
                    src={WelcomeAsideImg}
                    alt="A woman reading a book"
                    className="Welcome-aside-img"
                />
            </div>
        </div>
    );
};

export default Welcome;
