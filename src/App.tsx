import { GlobalStyles } from './styles/globalStyles';
import { ResetCss } from './styles/reset';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
// import { HomePage } from './pages/HomePage';
import { RoutesMain } from './routes/RoutesMain';
// import { AllNoticesPage } from './pages/AllNoticesPage';
// import { FocusNoticePage } from './pages/FocusNoticePage';

const App = () => {
  return (
    <>
      <RoutesMain/>
      <ResetCss />
      <GlobalStyles />
      <ToastContainer />
      {/* <HomePage/> */}
      {/* <AllNoticesPage /> */}
      {/* <FocusNoticePage/> */}
    </>
  );
};

export default App;
