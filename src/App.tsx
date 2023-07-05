import { GlobalStyles } from './styles/globalStyles';
import { ResetCss } from './styles/reset';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AllNoticesPage } from './pages/AllNoticesPage';
import { FocusNoticePage } from './pages/FocusNoticePage';

const App = () => {
  return (
    <BrowserRouter>
      <ResetCss />
      <GlobalStyles />
      <ToastContainer />
      <HomePage/>
      {/* <AllNoticesPage /> */}
      {/* <FocusNoticePage/> */}
    </BrowserRouter>
  );
};

export default App;
