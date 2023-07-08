import { createContext, useEffect, useState } from 'react';
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
  setPostCreateUpdate: React.Dispatch<
    React.SetStateAction<iPostRegisterUpdate | null>
  >;
  like: iLike | null;
  setLike: React.Dispatch<React.SetStateAction<iLike | null>>;
  createNewNotice: (formData: iPostRegisterUpdate) => Promise<void>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  deletePost: (id: number) => Promise<void>;
  setDashboardList: React.Dispatch<React.SetStateAction<iPostsList[]>>;
  dashboardList: iPostsList[];
}

export const NoticeContext = createContext({} as iNoticeContext);

export const NoticesProvider = ({ children }: iProviderNoticeProps) => {
  // postCreateUpdate é o mesmo corpo de objeto tanto para criação de post quanto de atualização
  const [postCreateUpdate, setPostCreateUpdate] =
    useState<iPostRegisterUpdate | null>(null);
  const [dashboardList, setDashboardList] = useState<iPostsList[]>([]);
  const [postsList, setPostsList] = useState<iPostsList[]>([]);
  const [like, setLike] = useState<iLike | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getAllNoticies = async () => {
      try {
        setLoading(true);
        const { data } = await api.get('/posts?_embed=likes');
        setPostsList(data);
        const checkOwner = localStorage.getItem('@NAME');
        const onlyUser = (postsList: iPostsList[]) => {
          const filteredPosts = postsList.filter(
            (post) => post.owner === checkOwner
          );
          setDashboardList(filteredPosts);
        };
        onlyUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getAllNoticies();
  }, [postCreateUpdate]);

  const createNewNotice = async (formData: iPostRegisterUpdate) => {
    //Nesse caso tem o mesmo corpo do update, então reutilizei a interface
    try {
      const token = localStorage.getItem('@TOKEN');
      const { data } = await api.post('/posts', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPostsList((postsList) => [...postsList, data]);
      toast.success(`Criação bem sucedida!`);
    } catch (error) {
      console.error(error);
    }
  };

  const deletePost = async (id: number) => {
    try {
      setLoading(true);
      const token = localStorage.getItem('@TOKEN');
      await api.delete(`/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const getIdFromStorage = localStorage.getItem('@CARDID');
      const userId = getIdFromStorage !== null ? JSON.parse(getIdFromStorage) : null;

      setDashboardList((postData) =>
        postData.filter((post) => post.id !== userId)
      );

      toast.success(`Deletado com sucesso!`);
    } catch (error) {
      console.error(error);
      toast.error(`Ops! Não foi possivel deletar`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <NoticeContext.Provider
      value={{
        postsList,
        setPostsList,
        postCreateUpdate,
        setPostCreateUpdate,
        like,
        setLike,
        createNewNotice,
        loading,
        setLoading,
        deletePost,
        setDashboardList,
        dashboardList,
      }}
    >
      {children}
    </NoticeContext.Provider>
  );
};
