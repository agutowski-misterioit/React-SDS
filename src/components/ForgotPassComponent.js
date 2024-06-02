import { useState } from 'react';
import { Button, Card, Form } from "react-bootstrap";

export const ForgotPassComponent = () => {

  const [mail, setMail] = useState("default@user");

  const setMailHandler = (evt) => {
    setMail(evt.target.value);
  }


  const tryRecovery = (evt) => {
    evt.preventDefault();
    if( mail === process.env.REACT_APP_DEFAULT_LOGIN){
      alert(`Odzyskiwanie się powiodło!\n\nTwoje hasło to: ${process.env.REACT_APP_DEFAULT_PASSWORD}`);
    }else{
      evt.preventDefault();
      alert("Użytkownik nie istnieje!!\n\nUżytkownik demonstracyjny:\nLogin: default@user\nHasło: temporary123");
    }
  }
  
  return(
    <div className='d-flex flex-column justify-center align-items-center align-content-center p-2 gap-2'>
      <Card className='d-flex'>
        <Card.Header>
          Odzyskiwanie hasła
        </Card.Header>
        <Card.Body className='d-flex flex-column gap-2'>
          <span className='d-flex text-start text-wrap' style={{"maxWidth":"400px"}}>Na podany adres email wyślemy link, dzięki któremu odzyskasz dostęp do swojego konta.</span>
          <Form className='d-flex flex-column gap-2' onSubmit={tryRecovery}>
            <Form.Control
              type="email"
              placeholder='E-mail'
              onChange={setMailHandler}
              value={mail}
              autoFocus
              required/>
            <Button type="submit">Wyślij wiadomość</Button>
          </Form>
        </Card.Body>
      </Card>

    </div>
  )
}