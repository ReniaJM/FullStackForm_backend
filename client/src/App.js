import React from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";

const App = () => {
  return(
    <>
      <div className="col-md-12">
        <hr className="my-3" />
        {/*{this.state.message && (*/}
        {/*  <Alert color="danger" className="text-center">*/}
        {/*    {this.state.message}*/}
        {/*  </Alert>*/}
        {/*)}*/}
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="text"
              name="email"
              id="email"
              // onChange={e => (this.email = e.target.value)}
              placeholder="Inform the email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Senha</Label>
            <Input
              type="password"
              name="password"
              id="password"
              // onChange={e => (this.password = e.target.value)}
              placeholder="Inform the password"
            />
          </FormGroup>
          {/*<Button color="primary" block onClick={this.signIn}>*/}
          {/*  Entrar*/}
          {/*</Button>*/}
        </Form>
      </div>
    </>
    )
};

export default App;
