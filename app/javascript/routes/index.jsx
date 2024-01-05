import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Users from "../components/Users";
import User from "../components/User";
import NewUser from "../components/NewUser";
import Posts from "../components/Posts";

export default (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/user" element={<NewUser />} />
            <Route path="/posts" element={<Posts />} />
        </Routes>
    </Router>
);