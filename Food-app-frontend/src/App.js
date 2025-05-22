import './App.css';
import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
// Removed bootstrap JS import as it may cause conflicts in React apps

import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';  // Uncommented Navbar import
import Login from './screens/Login';
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/myorder" element={<MyOrder />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
