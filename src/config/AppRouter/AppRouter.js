import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "../../DashBoard/DashBoard";
import SignUp from "../../Authentication/SignUp";

export default function AppRouter() {
    return (
        <>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<SignUp  />} />
                        <Route path="/DashBoard/*" element={<DashBoard />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}