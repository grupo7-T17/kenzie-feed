import { createContext, useState } from 'react';

interface iProviderUserProps {
  children: React.ReactNode;
}

export interface iUserContext {
  userRegisterLogin: iUserRegisterLogin[];
  setUserRegisterLogin: React.Dispatch<React.SetStateAction<iUserRegisterLogin[]>>;
}

export interface iUserRegisterLogin {
  email: string;
  password: string;
  name?: string;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iProviderUserProps) => {
  // É o mesmo estado para as duas situações. Tanto para corpo de Login quanto para de Register são idênticos
  const [userRegisterLogin, setUserRegisterLogin] = useState<iUserRegisterLogin[]>([]);

  return (
    <UserContext.Provider value={{ userRegisterLogin, setUserRegisterLogin }}>
      {children}
    </UserContext.Provider>
  );
};
