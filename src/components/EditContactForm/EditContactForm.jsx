import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function EditContactForm({ contact, contacts, setContacts, editContact, deleteContact }) {
    
    const [updateContact, setUpdateContact] = useState({
        first: '',
        last: '',
        phone: '',
        email: '',
    });
    const [removeContact, setRemoveContact] = useState();

    const navigate = useNavigate();

    function handleChangeState(evt) {
        const updatedContactInfo = {
            ...updateContact,
            [evt.target.name]: evt.target.value
        };
        setUpdateContact(updatedContactInfo);
    }

    function handleEditContact(evt) {
        evt.preventDefault();
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
        <div>
            <form onSubmit={handleEditContact}>
                <label>First Name:</label>
                <input
                    name="first"
                    value={updateContact.first}
                    onChange={handleChangeState}
                    // defaultValue={preloadedValues}
                    // placeholder='first'
                    required
                />
                <label>Last Name:</label>
                <input
                    name="last"
                    value={updateContact.last}
                    onChange={handleChangeState}
                    placeholder=''
                    required
                />
                <label>Phone:</label>
                <input
                    name="phone"
                    value={updateContact.phone}
                    onChange={handleChangeState}
                    placeholder=''
                    required
                    pattern=".{4,}"
                />
                <label>Email:</label>
                <input
                    name="email"
                    value={updateContact.email}
                    onChange={handleChangeState}
                    placeholder=''
                    required
                />
                 <button type="submit">Update Contact</button>
                 <button type="submit" onClick={handleDeleteContact}>Delete Contact</button>
            </form>
        </div>
    );

}