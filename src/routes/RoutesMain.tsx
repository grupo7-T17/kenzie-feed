import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { FocusNoticePage } from '../pages/FocusNoticePage';
import { EditPage } from '../pages/EditPage';
import { DashboardPage } from '../pages/DashboardPage';
import { AllNoticesPage } from '../pages/AllNoticesPage';

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/notice' element={<FocusNoticePage />} />
      <Route path='/edit' element={<EditPage />} />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='/allnotices' element={<AllNoticesPage />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};
