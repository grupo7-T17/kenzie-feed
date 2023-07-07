import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../services/api';
interface iProviderUserProps {
  children: React.ReactNode;
}

export interface iUserContext {
  userRegisterLogin: iUserRegisterLogin[];
  setUserRegisterLogin: React.Dispatch<
    React.SetStateAction<iUserRegisterLogin[]>
  >;
  registerUser: (user: iUserRegisterLogin) => Promise<void>;
  loginUser: (credentials: iUserCredentials) => Promise<void>;
  userLogout: () => void;
}

export interface iUserRegisterLogin {
  email: string;
  password: string;
  name?: string;
}

export interface iUserCredentials {
  email: string;
  password: string;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iProviderUserProps) => {
  const [userRegisterLogin, setUserRegisterLogin] = useState<
    iUserRegisterLogin[]
  >([]);
  const navigate = useNavigate();

  const registerUser = async (user: iUserRegisterLogin) => {
    try {
      const response = await api.post('/users', user);

      if (response.status === 201) {
        const data = response.data;
        setUserRegisterLogin([...userRegisterLogin, data.user]);
        toast.success(`Cadastro bem sucedido!`, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        toast.error(`Não foi possível fazer o cadastro`, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(`Não foi possível fazer o cadastro`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  const loginUser = async (credentials: iUserCredentials) => {
    try {
      const response = await api.post('/login', credentials);

      if (response.status === 200) {
        const data = response.data;
        setUserRegisterLogin([...userRegisterLogin, data.user]);

        localStorage.setItem('@TOKEN', data.accessToken);
        localStorage.setItem('@USERID', data.user.id);
        localStorage.setItem('@NAME', data.user.name); 
        localStorage.setItem('@USERLOGGED', JSON.stringify(true));

        toast.success(`Login bem sucedido!`, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        navigate('/dashboard');
      } else {
        toast.error(`Falha ao fazer login`, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(`Usuário ou senha incorretos`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  const userLogout = () => {
    localStorage.removeItem('@TOKEN');
    localStorage.removeItem('@USERID');
    localStorage.removeItem('@USER');
    localStorage.removeItem('@USERLOGGED');
  };

  return (
    <UserContext.Provider
      value={{
        userRegisterLogin,
        setUserRegisterLogin,
        registerUser,
        loginUser,
        userLogout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
