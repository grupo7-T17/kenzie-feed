import { GlobalStyles } from './styles/globalStyles';
import { ResetCss } from './styles/reset';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { HomePage } from './pages/HomePage';
import { BrowserRouter } from 'react-router-dom';
// import { AllNoticesPage } from './pages/AllNoticesPage';

const App = () => {
  return (
    <BrowserRouter>
      <ResetCss />
      <GlobalStyles />
      <ToastContainer />
      <HomePage />
    </BrowserRouter>
  );
};

export default App;
