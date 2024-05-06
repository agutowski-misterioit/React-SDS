import { Button, Card, Form } from "react-bootstrap";

import { useState } from "react";

export const RegisterComponent = ({handler}) => {

  const [email, setEmail] = useState('');
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');

  const handleEmail = (evt) => {
    setEmail(evt.target.value);
  }
  const handlePass1 = (evt) => {
    setPass1(evt.target.value);
  }
  const handlePass2 = (evt) => {
    setPass2(evt.target.value);
  }

  const someFunctionOnSubmit = (evt) => {
    evt.preventDefault();
    if(email && pass1 === pass2){
      handler.setSaveMail(email);
      alert("Rejestracja przebiegłaby pomyślnie,\nniestety serwis aktualnie nie jest dostępny. \n\nSpróbuj ponownie później");
      alert("Użytkownik demonstracyjny:\n\nLogin: default@user\nHasło: temporary123")
      handler.setEntryState(0)
    }else{
      setPass1('');
      setPass2('');
      alert("Rejestracja nie powiodła się, hasła nie zgadzają się ze sobą\nSpróbuj ponownie!")
    }

  }

  return(
    <div className='d-flex flex-column justify-center align-items-center align-content-center p-2 gap-2'>
      <Card className='d-flex'>
        <Card.Header>
          Rejestracja
        </Card.Header>
        <Card.Body>
          <Form className='d-flex flex-column gap-2' onSubmit={someFunctionOnSubmit}>
            <Form.Control
              onChange={ handleEmail }
              type="email"
              className='form-control'
              value={ email }
              placeholder='E-mail'
              autoFocus
              required/>
            <Form.Control
              onChange={ handlePass1 }
              type="password"
              className='form-control'
              value={ pass1 || "" }
              placeholder='Hasło'
              required/>
            <Form.Control
              onChange={ handlePass2 }
              type="password"
              className='form-control'
              value={ pass2 || "" }
              placeholder='Powtórz hasło'
              required/>
            <Button type="submit">Zarejestruj</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}