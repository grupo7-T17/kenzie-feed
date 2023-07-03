import { UserProvider } from './providers/UserContext';
import { NoticesProvider } from './providers/NoticesContext';
import { RoutesMain } from './routes/RoutesMain';
import { GlobalStyles } from './styles/globalStyles';
import { ResetCss } from './styles/reset';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <ResetCss />
      <GlobalStyles />
      <ToastContainer/>
      <UserProvider>
        <NoticesProvider>
          <RoutesMain />
        </NoticesProvider>
      </UserProvider>
    </>
  );
};

export default App;
