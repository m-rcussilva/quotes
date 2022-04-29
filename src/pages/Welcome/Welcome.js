import { useState } from "react";
import WelcomeAsideImg from "../../assets/images/welcome-aside-img.png";
import SignInForm from "../../components/SignInForm/SignInForm";
import "./Welcome.css";

const Welcome = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <div className="Welcome">
                <div className="Welcome-container-left">
                    <h2 className="Welcome-text">
                        Welcome to <span>Quotes</span>. A website where you can
                        save your favorites quotes.
                    </h2>

                    <div className="Welcome-container-btn">
                        <button className="Welcome-btn" onClick={toggleModal}>
                            Sign In
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

                {modal && <SignInForm toggleModal={toggleModal} />}
            </div>
        </>
    );
};

export default Welcome;
