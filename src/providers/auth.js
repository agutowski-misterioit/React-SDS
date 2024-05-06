import { useState, useContext, createContext } from "react";
import { useCookies } from "react-cookie";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
  const [cookies, setCookie, removeCookie] = useCookies(['token', 'username']);
  
  const login = async(token) => {
    const maxAge = 60*60*48;
    setCookie('token', token, { maxAge: maxAge  });
    setCookie('username', 'Default User', { maxAge: maxAge });
  }
  
  const logout = () => {
    removeCookie('token');
    removeCookie('username');
  }

  const getUsername = () => {
    return cookies.username;
  }

  return (
    <AuthContext.Provider value={{cookies, login, logout, getUsername}}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => {
  return useContext(AuthContext);
};