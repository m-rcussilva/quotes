import "./ListQuotes.css";

const ListQuotes = ({ list }) => {
    const getList = list.map((msg, index) => {
        return (
            <div key={index} className="FeedContainer-ctn-quotes">
                <p className="FeedContainer-quotes">{msg.message}</p>
            </div>
        );
    });

    return <div>{getList}</div>;
};

export default ListQuotes;
