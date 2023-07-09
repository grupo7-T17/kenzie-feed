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

export interface iPostResponse {
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
  getPostById: (id: number) => Promise<iPostResponse | null>;
  postInFocus: iPostsList | null;
  setPostInFocus: React.Dispatch<React.SetStateAction<iPostsList | null>>;
  likePost: (postId: number) => Promise<void>;
  dislikePost: (postId: number) => Promise<void>
  setDashboardList: React.Dispatch<React.SetStateAction<iPostsList[]>>;
  dashboardList: iPostsList[];
  updateNotice: (formData: iPostRegisterUpdate, postID: number) => Promise<void>
}

export const NoticeContext = createContext({} as iNoticeContext);

export const NoticesProvider = ({ children }: iProviderNoticeProps) => {
  const [postCreateUpdate, setPostCreateUpdate] =
    useState<iPostRegisterUpdate | null>(null);
  const [dashboardList, setDashboardList] = useState<iPostsList[]>([]);
  const [postsList, setPostsList] = useState<iPostsList[]>([]);
  const [like, setLike] = useState<iLike | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [postInFocus, setPostInFocus] = useState<iPostsList | null>(null);

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


  const updateNotice = async (formData: iPostRegisterUpdate, postId: number) => {
    try {
      const token = localStorage.getItem('@TOKEN');
      const { data } = await api.put(`/posts/${postId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPostsList(data)
      toast.success(`Notícia atualizada com sucesso!!`);
    } catch (error) {
      console.error(error);
      toast.error(`Não foi possível atualizar a notícia.`, {
      });
    }
  };

  const createNewNotice = async (formData: iPostRegisterUpdate) => {
    try {
      const token = localStorage.getItem('@TOKEN');
      const { data } = await api.post('/posts', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    
      setDashboardList((postsList) => [...postsList, data]);
      toast.success(`Criação bem sucedida!`);
    } catch (error) {
      console.error(error);
      toast.error(`Não foi possível criar.`);
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

  const getPostById = async (id: number) => {
    try {
      const { data } = await api.get(`/posts/${id}?_embed=likes`);
      return data as iPostResponse;
    } catch (error) {
      console.error(error);
      toast.error('Erro ao obter informações do post.');
      return null;
    }
  };

  const likePost = async (postId: number) => {
    try {
      const token = localStorage.getItem('@TOKEN');
      const userId = localStorage.getItem('@USERID');
      if (!token || !userId) {
        toast.info('Logue para curtir');
        return;
      }

      const likeData: iLike = {
        userId: Number(userId),
        postId,
      };

      await api.post('/likes', likeData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setLike(likeData);
    } catch (error) {
      console.error(error);
      toast.error('Erro ao curtir o post.');
    }
  };

  const dislikePost = async (postId: number) => {
    try {
      const token = localStorage.getItem('@TOKEN');

      await api.delete(`/likes/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (like?.postId === postId) {
        setLike(null);
      }
    } catch (error) {
      console.error(error);
      toast.error('Erro ao descurtir o post.');
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
        getPostById,
        postInFocus,
        setPostInFocus,
        likePost,
        dislikePost,
        setDashboardList,
        dashboardList,
        updateNotice,
      }}
    >
      {children}
    </NoticeContext.Provider>
  );
};
