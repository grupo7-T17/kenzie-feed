import { GlobalStyles } from './styles/globalStyles';
import { ResetCss } from './styles/reset';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { RoutesMain } from './routes/RoutesMain';
import Modal from 'react-modal';
import { useContext } from 'react';
import { NoticeContext } from './providers/NoticesContext';
import { StyledloadWrapper } from './styles/grid';
import { ScaleLoader } from 'react-spinners';

Modal.setAppElement('#root');

const App = () => {
  const { loading } = useContext(NoticeContext);
  return (
    <>
      <ResetCss />
      <GlobalStyles />
      {loading ? (
        <StyledloadWrapper>
          <ScaleLoader color='#808080' />
        </StyledloadWrapper>
      ) : (
        <RoutesMain />
      )}
      <ToastContainer />
    </>
  );
};

export default App;
