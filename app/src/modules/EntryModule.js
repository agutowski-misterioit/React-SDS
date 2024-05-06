import { LoginComponent, RegisterComponent } from '../components';
import { useAuth } from "../providers/auth";

import { useState } from "react";
import { Navigate } from 'react-router-dom';
import { Button } from "react-bootstrap";

const MiniLayout = ({children}) => {
  return(<div className='w-100 vh-100 d-flex flex-column justify-content-center align-items-center'>
    {children}
  </div>)
}

export const EntryModule = () => {

  const [entryState, setEntryState] = useState(0);
  const [saveMail, setSaveMail] = useState("unsaved");
  const [passCredentials, setPassCredentials] = useState(0);

  const auth = useAuth();

  if(passCredentials === "token"){
    auth.login(passCredentials);
  }

  if(auth.cookies.token) { return <Navigate to='/' /> };

  switch(entryState){
    case 1:
      return(<MiniLayout>
        <RegisterComponent handler={{setSaveMail, setEntryState}} />
        <span style={{"opacity":"0.5"}}>
          Masz już konto?
        </span>
        <Button
          variant="outline-primary"
          onClick={()=>{setEntryState(0)}}>
            Przejdź do logowania
        </Button>
      </MiniLayout>)
    case 0:
    default:
      return(<MiniLayout>
        <LoginComponent handler={{saveMail, setPassCredentials}}/>
        <span style={{"opacity":"0.5"}}>
          Nie masz konta?
        </span>
        <Button 
          variant="outline-primary"
          onClick={()=>{setEntryState(1)}}>
            Przejdź do rejestracji
        </Button>
      </MiniLayout>)
  }
}