import { GlobalStyles } from './styles/globalStyles';
import { ResetCss } from './styles/reset';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
// import { HomePage } from './pages/HomePage';
import { RoutesMain } from './routes/RoutesMain';
//import { RegisterPage } from './pages/RegisterPage';
// import { AllNoticesPage } from './pages/AllNoticesPage';
// import { FocusNoticePage } from './pages/FocusNoticePage';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const App = () => {
  return (
    <>
      <RoutesMain />
      <ResetCss />
      <GlobalStyles />
      <ToastContainer />
      {/*<RegisterPage/>*/}
      {/* <HomePage/> */}
      {/* <AllNoticesPage /> */}
      {/* <FocusNoticePage/> */}
    </>
  );
};

export default App;
