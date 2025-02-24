import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Layout from './Layout.jsx';
import RegisterPage from './pages/RegisterPage.jsx';

import axios from 'axios';
import { UserContextProvider } from './UserContext';
import ProfilePage from './pages/ProfilePage.jsx';
import PlacesPage from './pages/PlacesPage.jsx';
import PlacesFormPage from './pages/PlacesFormPage.jsx';
import PlacePage from "./pages/PlacePage";
import BookingsPage from "./pages/BookingsPage";
import BookingPage from "./pages/BookingPage";
import TravelBuddyProfile from './pages/TravelBuddyProfile.jsx';
import PersonalityTestPage from './pages/PersonalityTestPage.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';

axios.defaults.baseURL= 'https://travelling-buddy.onrender.com';
// axios.defaults.baseURL= 'https:localhost:4000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} /> 
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />
          <Route path="/account/places/:id" element={<PlacesFormPage />} />
          <Route path="/place/:id" element={<PlacePage />} /> 
          <Route path="/account/bookings" element={<BookingsPage />} />
          <Route path="/account/bookings/:id" element={<BookingPage />} />

          <Route path="/user-profile/:email" element={<TravelBuddyProfile />} />
          <Route path="/personality-test" element={<PersonalityTestPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
