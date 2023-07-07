import { Outlet, Navigate } from "react-router-dom" 

export const ProtectedRoutes = () => {
    // const { user } = useContext(UserContext)
    // return user ? <Outlet /> : <Navigate to="/" /> 

    const userLogged = localStorage.getItem('@USERLOGGED')
    return userLogged ? <Outlet /> : <Navigate to="/" /> 
}