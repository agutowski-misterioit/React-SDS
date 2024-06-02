import { LoginComponent, RegisterComponent, ForgotPassComponent } from '../components';
import { useAuth } from "../providers/auth";

import { useState } from "react";
import { Navigate } from 'react-router-dom';
import { Button } from "react-bootstrap";

const MiniLayout = ({children}) => {
  return(
    <div className='w-100 vh-100 d-flex flex-column justify-content-center align-items-center gap-3'>
      {children}
    </div>
  )
};

const BtnsChanger = ({spanText,btnText,setEntryState,setEntryValue}) => {
  return(
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <span style={{"opacity":"0.5"}}>
        {spanText}
      </span>
      <Button
        variant="outline-primary"
        onClick={()=>{setEntryState(setEntryValue)}}>
          {btnText}
      </Button>
    </div>
  )
}

export const EntryModule = () => {

  const [entryState, setEntryState] = useState(0);
  const [saveMail, setSaveMail] = useState("unsaved");
  const [passCredentials, setPassCredentials] = useState(0);

  const auth = useAuth();

  if(passCredentials === "token"){
    auth.login(passCredentials);
  }

  if(auth.cookies.token) return <Navigate to='/' />;

  switch(entryState){
    case 2:
      return(<MiniLayout setEntryState={setEntryState}>
        <ForgotPassComponent />
        
        <BtnsChanger
          spanText={"Masz już konto?"}
          btnText={"Przejdź do logowania"}
          setEntryState={setEntryState}
          setEntryValue={0} />

      </MiniLayout>)
    case 1:
      return(<MiniLayout setEntryState={setEntryState}>
        <RegisterComponent handler={{setSaveMail, setEntryState}} />

        <BtnsChanger
          spanText={"Masz już konto?"}
          btnText={"Przejdź do logowania"}
          setEntryState={setEntryState}
          setEntryValue={0} />

        <BtnsChanger
          spanText={"Zapomniałeś hasła?"}
          btnText={"Przejdź do odzyskiwania"}
          setEntryState={setEntryState}
          setEntryValue={2} />
          
      </MiniLayout>)
    case 0:
    default:
      return(<MiniLayout setEntryState={setEntryState}>
        <LoginComponent handler={{saveMail, setPassCredentials}}/>

        <BtnsChanger
          spanText={"Nie masz konta?"}
          btnText={"Przejdź do rejestracji"}
          setEntryState={setEntryState}
          setEntryValue={1} />
        
        <BtnsChanger
          spanText={"Zapomniałeś hasła?"}
          btnText={"Przejdź do odzyskiwania"}
          setEntryState={setEntryState}
          setEntryValue={2} />

      </MiniLayout>)
  }
}