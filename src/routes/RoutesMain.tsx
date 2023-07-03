import { Routes, Route, Navigate } from "react-router-dom"
import { ProtectedRoutes } from "./ProtectedRoutes"
import { PublicRoutes } from "./PublicRoutes"
import { HomePage } from "../pages/HomePage/HomePage"
import { LoginPage } from "../pages/LoginPage/LoginPage"
import { RegisterPage } from "../pages/RegisterPage/RegisterPage"
import { AllNoticesPage } from "../pages/AllNoticesPage/AllNoticesPage"
import { DashboardPage } from "../pages/DashboardPage/DashboardPage"
import { FocusNoticePage } from "../pages/FocusNoticePage/FocusNoticePage"
import { EditPage } from "../pages/EditPage/EditPage"

export const RoutesMain = () => {

   return (
      <Routes>
         <Route path="/" element={<HomePage />} />

         <Route element={<PublicRoutes />}>
            <Route index element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/all" element={<AllNoticesPage />} />
         </Route>

         <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/notice" element={<FocusNoticePage />} />
            <Route path="/editnotice" element={<EditPage />} />
         </Route>

         <Route path="*" element={<Navigate to="/" />} />
      </Routes>
   )
} 
