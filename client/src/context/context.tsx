import React, { createContext, useContext, useState } from 'react';

type SetStateFuncton<T> = React.Dispatch<React.SetStateAction<T>>;

interface IUserInfo {
  token: string | null;
  userId: string | null;
}

interface IContextProps {
  userInfo: IUserInfo;
  setUserInfo: SetStateFuncton<IUserInfo>;
}

const Context = createContext({} as IContextProps);

export const ContextProvider: React.FC = ({ children }) => {
  const [userInfo, setUserInfo] = useState<IUserInfo>(
    JSON.parse(localStorage.getItem('userInfo') ?? '{}'),
  );

  const value: IContextProps = {
    userInfo,
    setUserInfo,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useContextValue = () => useContext(Context);
