import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from './../components/auth/LoginScreen';
import CalendarScreen from './../components/calendar/CalendarScreen';

const AppRouter = () => {

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route exact path="/login" element={<LoginScreen />} />
                    <Route exact path="/" element={<CalendarScreen />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter