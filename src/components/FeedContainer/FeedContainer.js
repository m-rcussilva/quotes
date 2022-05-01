import { useState } from "react";
import "./FeedContainer.css";

const FeedContainer = () => {
    const [message, setMessage] = useState("");
    const [list, setList] = useState([]);

    const getData = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = () => {
        const data = { message };

        if (message) {
            setList((ls) => [...ls, data]);
            setMessage("");
        }
    };

    const getList = list.map((msg, index) => {
        return (
            <div key={index} className="FeedContainer-ctn-quotes">
                <p className="FeedContainer-quotes">{msg.message}</p>
            </div>
        );
    });

    return (
        <div className="FeedContainer">
            <div>
                <p className="FeedContainer-info-input">
                    Escreva sua citação favorita no campo abaixo
                </p>
            </div>

            <textarea
                className="FeedContainer-textarea"
                value={message}
                onChange={getData}
            ></textarea>

            <div className="FeedContainer-ctn-btn">
                <button
                    className="FeedContainer-btn"
                    onClick={() => handleSubmit()}
                >
                    Enviar
                </button>
            </div>

            {getList}
        </div>
    );
};

export default FeedContainer;
