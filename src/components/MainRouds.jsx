import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HobbyBoard from './Hobby/HobbyBoard';
import HomePage from './HomePage/HomePage';
import MySkills from './MySkills/MySkills';

const MainRouds = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/MySkills" element={<MySkills/>} />
            <Route path="/HobbyBoard" element={<HobbyBoard/>} />
        </Routes>
    );
};

export default MainRouds;