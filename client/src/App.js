import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Listings from './pages/Listings';
import ListingDetails from './pages/ListingDetails';
import Reservation from './pages/Reservation';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MountainHikeBooking from './pages/MountainHikeBooking';
import CookingWorkshopBooking from './pages/CookingWorkshopBooking';
import AddPost from './pages/AddPost';
import PostList from './pages/PostList';
import UpdatePost from './pages/UpdatePost';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/listing/:id" element={<ListingDetails />} />
            <Route path="/reservation/:id" element={<Reservation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/mountain-hike-booking" element={<MountainHikeBooking />} />
            <Route path="/cooking-workshop-booking" element={<CookingWorkshopBooking />} />
            <Route path="/add-post" element={<AddPost />} />
            <Route path="/post-list" element={<PostList />} />
            <Route path="/update-post/:id" element={<UpdatePost />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
