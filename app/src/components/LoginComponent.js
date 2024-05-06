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
    setMail("default@user");
    setPass("temporary123");
  }

  useEffect(() => {
    if(handler.saveMail !== "unsaved"){
      setDefault();
    }
  },[]);

  const tryLogin = (evt) => {
    evt.preventDefault();
    if( mail === "default@user" && pass === "temporary123"){
      alert("Logowanie się powiodło!");
      handler.setPassCredentials("token");
    }else{
      evt.preventDefault();
      alert("Dane niepoprawne!!\n\nUżytkownik demonstracyjny:\n\nLogin: default@user\nHasło: temporary123");
      setMail("default@user");
      setPass("temporary123");
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
              // className='form-control'
              placeholder='Login'
              onChange={setMailHandler}
              value={mail}
              required/>
            <Form.Control
              type="password"
              // className='form-control'
              placeholder='Hasło'
              onChange={setPassHandler}
              value={pass}
              required/>
            <Button type="submit">Zaloguj</Button>
          </Form>
        </Card.Body>
      </Card>

      <div
        style={{"position": "fixed", "top": 0, "left": 0,"cursor": "pointer", opacity: "0.2"}} 
        onClick={setDefault}
        title="Kliknij aby uzupełnić danymi użytkownika demonstracyjnego">
          Autouzupełnianie
      </div>

    </div>
  )
}