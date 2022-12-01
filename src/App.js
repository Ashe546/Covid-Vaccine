import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './Redux/Store';

import Home from './component/Home';
import Details from './component/Details';
import Nav from './component/Nav';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
