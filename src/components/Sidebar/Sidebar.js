import "./Sidebar.css";
import ProfilePic from "../../assets/images/profile-pic.png";

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <div className="Sidebar-container">
                <img src={ProfilePic} alt="" className="Sidebar-profile-img" />

                <h3 className="Sidebar-profile-name">Username</h3>
            </div>
        </div>
    );
};

export default Sidebar;
