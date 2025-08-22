import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Browse from "./pages/Browse";
import PostItem from "./pages/PostItem";
import ItemDetails from "./pages/ItemDetails";
import MyPosts from "./pages/MyPosts";
import Claims from "./pages/Claims";
import Moderation from "./pages/Moderation";
import Notifications from "./pages/Notifications";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/browse" element={<Browse />} />
  <Route path="/post" element={<PostItem />} />
  <Route path="/item/:id" element={<ItemDetails />} />
  <Route path="/myposts" element={<MyPosts />} />
  <Route path="/claims" element={<Claims />} />
  <Route path="/moderation" element={<Moderation />} />
  <Route path="/notifications" element={<Notifications />} />
  <Route path="/profile" element={<UserProfile />} />
  <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
