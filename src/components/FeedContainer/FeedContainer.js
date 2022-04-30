import "./FeedContainer.css";

const FeedContainer = () => {
    return (
        <div className="FeedContainer">
            <div>
                <p>Escreva sua citação favorita no campo abaixo</p>
            </div>
            <textarea className="FeedContainer-textarea"></textarea>
            <div className="FeedContainer-ctn-btn">
                <button className="FeedContainer-btn">Enviar</button>
            </div>
        </div>
    );
};

export default FeedContainer;
