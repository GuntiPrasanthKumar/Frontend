import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import AddItem from "./Pages/AddItem.jsx";
import ShowItem from "./Pages/ShowItem.jsx";
import ItemDetails from "./Pages/ItemDetails.jsx";

import Context, { ContextProvider } from "./Context.jsx"; 

import './App.css';

function App() {
    const [submitItem, setSubmitItem] = useState([]);

    return (
        <ContextProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<AddItem />} />
                    <Route path='/showitem' element={<ShowItem />} />
                    <Route path='/itemdetails/:id' element={<ItemDetails />} />
                </Routes>
            </BrowserRouter>
        </ContextProvider>
    );
}

export default App;