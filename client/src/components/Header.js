import React from 'react';
import { Navbar, Form, FormControl, Button} from 'react-bootstrap';

const Header = () => {

  return (
    <Navbar bg="dark" variant="dark" fixed="top" class="py-4">
      <Navbar.Brand href="#home" className="mr-auto">AptsForMe</Navbar.Brand>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
};

export default Header;