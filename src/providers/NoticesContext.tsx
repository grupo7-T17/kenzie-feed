import { createContext, useState } from 'react';

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
}

export const NoticeContext = createContext({} as iNoticeContext);

export const NoticesProvider = ({ children }: iProviderNoticeProps) => {
  // postCreateUpdate é o mesmo corpo de objeto tanto para criação de post quanto de atualização
  const [postCreateUpdate, setPostCreateUpdate] = useState<iPostRegisterUpdate | null>(null);
  const [postsList, setPostsList] = useState<iPostsList[]>([]);
  const [like, setLike] = useState<iLike | null>(null);

  return (
    <NoticeContext.Provider
      value={{
        postsList,
        setPostsList,
        postCreateUpdate,
        setPostCreateUpdate,
        like,
        setLike,
      }}
    >
      {children}
    </NoticeContext.Provider>
  );
};
