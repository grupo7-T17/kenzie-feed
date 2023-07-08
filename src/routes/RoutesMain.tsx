import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { FocusNoticePage } from '../pages/FocusNoticePage';
import { EditPage } from '../pages/EditPage';
import { DashboardPage } from '../pages/DashboardPage';
import { AllNoticesPage } from '../pages/AllNoticesPage';
import { ModalProvider } from '../providers/ModalContext';
import { ProtectedRoutes } from './ProtectedRoutes';

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/allnotices' element={<AllNoticesPage />} />

      <Route path='/notice/:id' element={<FocusNoticePage />} />

      <Route element={<ProtectedRoutes />}>
        <Route
          path='/dashboard'
          element={
            <ModalProvider>
              <DashboardPage />
            </ModalProvider>
          }
        />
        <Route path='/edit' element={<EditPage />} />
      </Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};
