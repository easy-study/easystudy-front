import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login} from "../login";
import { Register} from "../register";

export const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
        </Router>
    );
};
