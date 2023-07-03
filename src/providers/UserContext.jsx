import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { api } from "../services/api"

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const currentPath = window.location.pathname
  const navigate = useNavigate()
  const token = localStorage.getItem("@TOKEN")
  const id = localStorage.getItem("@USERID")

  useEffect(() => {
    if (token && id) {
      loadUser()
    }
  }, [])

  const loadUser = async () => {
    try {
      setLoading(true)
      const response = await api.get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setUser(response.data)
      navigate(currentPath)
    } finally {
      setLoading(false)
    }
  }

  const userRegister = async (formData) => {
    try {
      setLoading(true)
      const body = {
        email: formData.email,
        password: formData.password,
        name: formData.name,
        bio: formData.bio,
        contact: formData.contact,
        course_module: formData.course_module,
      }
      const response = await api.post("/users", body)
      if (response) {
        toast.success(`Cadastro bem sucedido!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
        loadUser()
        navigate("/")

      }
    } catch (error) {
      toast.error(`Não foi possível concluir o cadastro`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    } finally {
      setLoading(false)
    }
  }

  const submit = (formData) => {
    userRegister(formData)
  }

  const userLogin = async (formData) => {
    try {
      setLoading(true)
      const body = {
        email: formData.email,
        password: formData.password,
      }
      const response = await api.post("/sessions", body)
      if (response) {
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")

        localStorage.setItem("@TOKEN", response.data.token)
        localStorage.setItem("@USERID", response.data.user.id)

        setUser(response.data.user)

        toast.success(`${response.data.user.name.trim()}, seja bem vindo(a)!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
        navigate("/dashboard")
      }
    } catch (error) {
      toast.error(`Usuário ou senha incorretos`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    } finally {
      setLoading(false)
    }
  }

  const userLogout = () => {
    localStorage.removeItem("@TOKEN")
    localStorage.removeItem("@USERID")
    setUser(null)
  }

  const isEmpty = (object) => {
    return Object.keys(object).length !== 0
  }

  return (
    <UserContext.Provider
      value={{ user, userLogin, userLogout, isEmpty, loading, submit }}
    >
      {children}
    </UserContext.Provider>
  )
}
