import { Routes, Route } from 'react-router-dom';
import LandingLayout from './layouts/LandingLayout';
import Register from './pages/register';
import LoginForm from './pages/Login';
import Features from './pages/Features';
import About from './pages/About';
import Inicio from './pages/Inicio';
import Home from './pages/Home';
import AuthLayout from './layouts/AuthLayout';
import ProtectedRoute from './components/ProtectedRoute';
import PublicOnlyRoute from './components/PublicOnlyRoute';

export default function App() {
  return (
    <Routes>

      <Route element={<PublicOnlyRoute />}>

        {/* Landing */}
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<Inicio />} />
          <Route path="features" element={<Features />} />
          <Route path="about" element={<About />} />
        </Route>

        {/* Auth */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="signup" element={<Register />} />
          <Route path="login" element={<LoginForm />} />
        </Route>

      </Route>


      {/* Private */}
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
      </Route>

    </Routes>
  );
}