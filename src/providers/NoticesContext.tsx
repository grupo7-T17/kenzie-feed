import { createContext, useState } from 'react';
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
      }}
    >
      {children}
    </NoticeContext.Provider>
  );
};
