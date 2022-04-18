import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "../pages/Main";
import About from "../pages/About";
import Information from "../pages/Information";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/about' element={<About />} />
                <Route path={`/information/:id`} element={<Information />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
