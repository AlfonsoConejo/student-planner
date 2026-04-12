import { Routes, Route } from 'react-router-dom';
import LandingLayout from './layouts/LandingLayout';
import Register from './pages/register';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}