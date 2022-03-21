import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default function AddContactForm({ addContact }) {
  const [newContact, setNewContact] = useState({
    first: '',
    last: '',
    phone: '',
    email: '',
  });

  const navigate = useNavigate();

  const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#1639c3',
                },
            },
        },
    },
});

  function handleChangeState(evt) {
    const updatedNewContact = {
      ...newContact,
      [evt.target.name]: evt.target.value
    };
    setNewContact(updatedNewContact);
  }

  function handleAddContact(evt) {
    evt.preventDefault();
    addContact(newContact);
    setNewContact({
      first: '',
      last: '',
      phone: '',
      email: '',
    });
    navigate('/');
  }

  const formRef = useRef();
  return (
    <ValidatorForm
      data-testid="form-add"
      ref={formRef}
      className="edit-form" 
      onSubmit={handleAddContact}
    >
        <div>
          <TextValidator
            name="first"
            label="First Name:"
            value={newContact.first}
            onChange={handleChangeState}
            required
            aria-required="true"
            validators={['required']}
            errorMessages={['this field is required']}
          />
        </div>
        <div>
          <TextValidator
            name="last"
            label="Last Name:"
            value={newContact.last}
            onChange={handleChangeState}
            required
            aria-required="true"
            validators={['required']}
            errorMessages={['this field is required']}
          />
        </div>
        <div>
          <TextValidator
            name="phone"
            label="Phone: (Ex: 555-555-5555)"
            value={newContact.phone}
            onChange={handleChangeState}
            required
            aria-required="true"
            validators={['required', 'matchRegexp:^(\\d{3}[- ]?){2}\\d{4}$']}
            errorMessages={['this field is required', 'phone is not valid']}
          />
        </div>
        <div>
          <TextValidator
            name="email"
            label="Email:"
            value={newContact.email}
            onChange={handleChangeState}
            required
            aria-required="true"
            validators={['required', 'isEmail']}
            errorMessages={['this field is required', 'email is not valid']}
          />
        </div>
        <ThemeProvider theme={theme}>
          <div>
          <Button variant="contained" type="submit">Add Contact</Button>
          </div>
        </ThemeProvider>
    </ValidatorForm>
  );
}
