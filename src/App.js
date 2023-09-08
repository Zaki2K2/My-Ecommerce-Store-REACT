// App.js

import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Navbar from './components/Navbar';
import Footer from './Footer/Footer'; // Corrected import statement

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />
                    <div className="main-content"> {/* Wrap your main content with this div */}
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/cart" element={<Cart />} />
                        </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
