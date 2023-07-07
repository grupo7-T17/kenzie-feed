import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';

interface iProviderNoticeProps {
  children: React.ReactNode;
}

export interface iPostRegisterUpdate {
  title: string;
  description: string;
  owner: string;
  userId: number;
  image: string;
}

export interface iLike {
  userId: number;
  postId: number;
}

export interface iPostsList {
  title: string;
  description: string;
  owner: string;
  userId: number;
  id: number;
  image: string;
  likes: iLike[];
}

export interface iNoticeContext {
  postsList: iPostsList[];
  setPostsList: React.Dispatch<React.SetStateAction<iPostsList[]>>;
  postCreateUpdate: iPostRegisterUpdate | null;
  setPostCreateUpdate: React.Dispatch<React.SetStateAction<iPostRegisterUpdate | null>>;
  like: iLike | null;
  setLike: React.Dispatch<React.SetStateAction<iLike | null>>;
  getAllNoticies: (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
  createNewNotice: (formData: iPostRegisterUpdate) => Promise<void>
}

export const NoticeContext = createContext({} as iNoticeContext);

export const NoticesProvider = ({ children }: iProviderNoticeProps) => {
  // postCreateUpdate é o mesmo corpo de objeto tanto para criação de post quanto de atualização
  const [postCreateUpdate, setPostCreateUpdate] = useState<iPostRegisterUpdate | null>(null);
  const [postsList, setPostsList] = useState<iPostsList[]>([]);
  const [like, setLike] = useState<iLike | null>(null);

  const getAllNoticies = async (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
      setLoading(true)
      const { data } = await api.get('/posts?_embed=likes')
      console.log(data)
      setPostsList(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false);
    }
    console.log(postsList)
  }

  const createNewNotice = async(formData: iPostRegisterUpdate) =>{ //Nesse caso tem o mesmo corpo do update, então reutilizei a interface
    try {
        const token = localStorage.getItem('@TOKEN')
        const { data } = await api.post('/posts', formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }) 
        setPostsList((postsList) => [...postsList, data])
        toast.success(`Criação bem sucedida!`, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
    } catch (error) {
        console.log(error)
    }
  }


  return (
    <NoticeContext.Provider
      value={{
        postsList,
        setPostsList,
        postCreateUpdate,
        setPostCreateUpdate,
        like,
        setLike,
        getAllNoticies,
        createNewNotice
      }}
    >
      {children}
    </NoticeContext.Provider>
  );
};
