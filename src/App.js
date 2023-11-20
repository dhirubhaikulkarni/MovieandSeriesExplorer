
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../src/Components/HomePage/homePage';
import ContactPage from './Components/MoviesPage/moviesPage';
import SeriesPage from './Components/SeriesPage/seriesPage';
import Navbar from './Components/NavBar/navBar';
import rootReducers from './Store/rootReducers'; 
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={rootReducers}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/MovieandSeriesExplorer" element={<HomePage />} />
          <Route path="/moviespage" element={<ContactPage />} />
          <Route path="/seriespage" element={<SeriesPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
