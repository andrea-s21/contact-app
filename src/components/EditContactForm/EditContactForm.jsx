import './EditContactForm.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Box, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function EditContactForm({ contact, editContact, deleteContact }) {
    const [updateContact, setUpdateContact] = useState({
        first: `${contact.first}`,
        last: `${contact.last}`,
        phone: `${contact.phone}`,
        email: `${contact.email}`
    });
    const [removeContact, setRemoveContact] = useState();

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

    const navigate = useNavigate();

    function handleChangeState(evt) {
        const updatedContactInfo = {
            ...updateContact,
            [evt.target.name]: evt.target.value
        };
        setUpdateContact(updatedContactInfo);
    }

    function handleEditContact() {
        editContact(updateContact);
        setUpdateContact({
            first: '',
            last: '',
            phone: '',
            email: '',
        });
        navigate('/');
    }

    function handleDeleteContact() {
        deleteContact(removeContact);
        setRemoveContact(removeContact);
        navigate('/');
    }

    return (
        <Box
            component="form"
            className="edit-form"
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
                    value={updateContact.first}
                    onChange={handleChangeState}
                    aria-label="First Name:"
                />
            </div>
            <div>
                <TextField
                    name="last"
                    label="Last Name:"
                    value={updateContact.last}
                    onChange={handleChangeState}
                    aria-label="Last Name:"
                />
            </div>
            <div>
                <TextField
                    name="phone"
                    label="Phone:"
                    value={updateContact.phone}
                    onChange={handleChangeState}
                    aria-label="Phone:"
                />
            </div>
            <div>
                <TextField
                    name="email"
                    label="Email:"
                    value={updateContact.email}
                    onChange={handleChangeState}
                    aria-label="Email:"
                />
            </div>
            <ThemeProvider theme={theme}>
                <div>
                    <Button variant="contained" type="button" onClick={() => { if (window.confirm('Are you sure you wish to update this contact?')) handleEditContact(contact) }}>Update Contact</Button>
                </div>
                <div>
                    <Button variant="contained" type="button" onClick={() => { if (window.confirm('Are you sure you wish to delete this contact?')) handleDeleteContact(contact) }}>Delete Contact</Button>
                </div>
            </ThemeProvider>
        </Box >
    );

}