import React, { createContext, useState } from "react";
import useFetch from "./useFetch";

type User = {
  id: number;
  nome: string;
  idade: number;
  aulas: number;
  cursos: number;
  preferencias: {
    playback: number;
    volume: number;
    qualidade: "baixa" | "media" | "alta";
  };
};

type IUserContext = {
  data: User | null;
  loading: boolean;
  changeUser: () => void;
};

const UserContext = createContext<IUserContext | null>(null);

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === null)
    throw new Error("useContext deve estar dentro do Provider");
  return context;
};

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const [userId, setUserId] = useState(1);
  const { data, loading } = useFetch<User>(
    `https://data.origamid.dev/usuarios/${userId}`,
  );

  const changeUser = () => {
    setUserId(userId < 10 ? userId + 1 : 1);
  };

  return (
    <UserContext.Provider value={{ data, loading, changeUser }}>
      {children}
    </UserContext.Provider>
  );
};
