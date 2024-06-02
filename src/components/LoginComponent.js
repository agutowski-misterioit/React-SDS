import { useState, useEffect } from 'react';
import { Button, Card, Form } from "react-bootstrap";

export const LoginComponent = ({handler}) => {

  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const setMailHandler = (evt) => {
    setMail(evt.target.value);
  }
  const setPassHandler = (evt) => {
    setPass(evt.target.value);
  }

  const setDefault = () => { 
    setMail(process.env.REACT_APP_DEFAULT_LOGIN);
    setPass(process.env.REACT_APP_DEFAULT_PASSWORD);
  }

  useEffect(() => {
    if(handler.saveMail !== "unsaved"){
      setDefault();
    }
  },[handler]);

  const tryLogin = (evt) => {
    evt.preventDefault();
    if( mail === process.env.REACT_APP_DEFAULT_LOGIN && pass === process.env.REACT_APP_DEFAULT_PASSWORD){
      alert("Logowanie się powiodło!");
      handler.setPassCredentials("token");
    }else{
      evt.preventDefault();
      alert("Użytkownik nie istnieje!!\n\nUżytkownik demonstracyjny:\nLogin: default@user\nHasło: temporary123");
      setDefault();
    }
  }
  
  return(
    <div className='d-flex flex-column justify-center align-items-center align-content-center p-2 gap-2'>
      <Card className='d-flex'>
        <Card.Header>
          Logowanie
        </Card.Header>
        <Card.Body>
          <Form className='d-flex flex-column gap-2' onSubmit={tryLogin}>
            <Form.Control
              type="email"
              placeholder='Login'
              onChange={setMailHandler}
              value={mail}
              autoFocus
              required/>
            <Form.Control
              type="password"
              placeholder='Hasło'
              onChange={setPassHandler}
              value={pass}
              required/>
            <Button type="submit">Zaloguj</Button>
          </Form>
        </Card.Body>
      </Card>

      <div
        style={{position: "fixed", top: "0.5em", left: "0.5em", cursor: "pointer", opacity: "0.5", border: "solid 1px red", borderRadius: "0.5em", padding: "0.5em", fontSize: "0.7em"}} 
        onClick={setDefault}
        title="Kliknij aby uzupełnić danymi użytkownika demonstracyjnego">
          <span
            style={{ position: "absolute", top: "-0.6em", fontSize: "0.5em", backgroundColor: "white", paddingInline: "1em"}}
          >developer console</span>

          Autouzupełnianie
      </div>

    </div>
  )
}