import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

export const RequireAuthProvider = ({children}) => {
  const auth = useAuth();

  if(!auth.cookies.token || auth.cookies.token === 'undefined') {
    return <Navigate to='/entry' replace />
  }
  
  return children;
}