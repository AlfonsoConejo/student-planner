import { Routes, Route } from 'react-router-dom';
import LandingLayout from './layouts/LandingLayout';
import Register from './pages/register';
import LoginForm from './pages/Login';
import Home from './pages/Home';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}