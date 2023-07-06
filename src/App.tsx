import { GlobalStyles } from './styles/globalStyles';
import { ResetCss } from './styles/reset';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { RoutesMain } from './routes/RoutesMain';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const App = () => {
  return (
    <>
      <RoutesMain />
      <ResetCss />
      <GlobalStyles />
      <ToastContainer />
    </>
  );
};

export default App;
