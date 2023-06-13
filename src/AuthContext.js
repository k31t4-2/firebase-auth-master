// ユーザーが現在ログインしているかどうかの判定をアプリ内で情報を保持しなくてはならないので、
// 全てのコンポーネントにユーザー情報を共有するために、useContextを使う。

import { useContext, useState, createContext } from "react";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext)
}
export function AuthProvider({ children }) {
  const [user, setUser] = useState("");

  const value = {
    user,
  };

  return <AuthContext.Provider value={ value }>{children}</AuthContext.Provider>;
}
