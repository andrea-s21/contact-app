import './EditContactForm.css';
import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

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
    const formRef = useRef();
    return (
        <ValidatorForm
            ref={formRef}
            className="edit-form"
            >
            <div>
                <TextValidator
                    name="first"
                    label="First Name:"
                    value={updateContact.first}
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
                    value={updateContact.last}
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
                    label="Phone:"
                    value={updateContact.phone}
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
                    value={updateContact.email}
                    onChange={handleChangeState}
                    required
                    aria-required="true"
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
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
        </ValidatorForm >
    );

}