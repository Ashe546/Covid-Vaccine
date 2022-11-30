import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './Redux/Store';

import Home from './component/Home';
import Details from './component/Details';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
        <h1 className="text-pink-600">Hellow world</h1>

      </Provider>
    </div>
  );
}

export default App;
