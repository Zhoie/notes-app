import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import './App.css';
import Header from './components/Header';
import NoteListPage from './pages/NoteListPage';
import NotePage from './pages/NotePage';

function App() {
  return (
    <BrowserRouter>
      <div className = 'App'>
        <Header />
        <Routes>
          <Route exact path='/' element = {<NotePage />} />
          <Route path='/note' element = {<NoteListPage />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
