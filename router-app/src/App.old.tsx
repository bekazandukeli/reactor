import { Routes, Route, Link } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import BeginningPage from './pages/BeginningPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import HomePage from './pages/HomePage';
import QuestionPage from './pages/QuestionPage';

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <ul>
                <li>
                  <Link to="/about/beginning">Beginning</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="about">
          <Route index={true} element={<AboutPage />} />
          <Route path='beginning' element={<BeginningPage />} />
        </Route>
        <Route path='contact' element={<ContactPage />} />
        <Route path='faq' element={<FaqPage />} />
        <Route path='faq/:questionId' element={<QuestionPage />} />
      </Routes>
      <footer>Footer</footer>
    </>
  );
}

export default App;
