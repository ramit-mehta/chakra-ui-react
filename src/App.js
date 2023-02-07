import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { Login } from './components/Login';
import SignUp from './components/SignUp';
import Upload from './components/Upload';
import Videos from './components/Videos';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/videos" element={<Videos />} />
        <Route exact path="/upload" element={<Upload />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
