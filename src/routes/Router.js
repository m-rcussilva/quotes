import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Welcome from "../pages/Welcome/Welcome";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route exact path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
