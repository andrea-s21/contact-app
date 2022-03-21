import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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

  return (
    <Box
      component="form"
      className="edit-form" 
      onSubmit={handleAddContact}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <div>
          <TextField
            name="first"
            label="First Name:"
            value={newContact.first}
            onChange={handleChangeState}
            required
            aria-label="First Name:"
            aria-required="true"
          />
        </div>
        <div>
          <TextField
            name="last"
            label="Last Name:"
            value={newContact.last}
            onChange={handleChangeState}
            required
            aria-label="Last Name:"
            aria-required="true"
          />
        </div>
        <div>
          <TextField
            name="phone"
            label="Phone: (Ex: 555-555-5555)"
            value={newContact.phone}
            onChange={handleChangeState}
            required
            aria-label="Phone: (Ex: 555-555-5555)"
            aria-required="true"
          />
        </div>
        <div>
          <TextField
            name="email"
            label="Email:"
            value={newContact.email}
            onChange={handleChangeState}
            required
            aria-label="Email:"
            aria-required="true"
          />
        </div>
        <ThemeProvider theme={theme}>
          <div>
          <Button variant="contained" type="submit">Add Contact</Button>
          </div>
        </ThemeProvider>
    </Box>
  );
}
