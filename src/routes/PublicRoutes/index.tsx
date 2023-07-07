import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom" 
import { UserContext } from "../../providers/UserContext"

export const PublicRoutes = () => {
    const { user } = useContext(UserContext) 

    return !user ? <Outlet /> : <Navigate to = "/dashboard"/>
}