import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome/Welcome";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
