import { GlobalStyles } from './styles/globalStyles';
import { ResetCss } from './styles/reset';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { HomePage } from './pages/HomePage';
// import { HomePage } from './pages/HomePage';

const App = () => {
  return (
    <>
      <ResetCss />
      <GlobalStyles />
      <ToastContainer/>
      <HomePage/>
    </>
  );
};

export default App;
