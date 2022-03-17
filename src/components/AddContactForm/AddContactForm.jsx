import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function NewContactForm({ addContact }) {
    const [newContact, setNewContact] = useState({
        first: '',
        last: '',
        phone: '',
        email: '',
    });

    const navigate = useNavigate();
  
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
            <form onSubmit={handleAddContact}>
                <label>First Name:</label>
                <input
                    name="first"
                    value={newContact.first}
                    onChange={handleChangeState}
                    placeholder={`${newContact.first}`}
                    required
                />
                <label>Last Name:</label>
                <input
                    name="last"
                    value={newContact.last}
                    onChange={handleChangeState}
                    placeholder={`${newContact.last}`}
                    required
                />
                <label>Phone:</label>
                <input
                    name="phone"
                    value={newContact.phone}
                    onChange={handleChangeState}
                    placeholder={`${newContact.phone}`}
                    required
                    pattern=".{4,}"
                />
                <label>Email:</label>
                <input
                    name="email"
                    value={newContact.email}
                    onChange={handleChangeState}
                    placeholder={`${newContact.email}`}
                    required
                />
                 <button type="submit">Add Contact</button>
            </form>
    );
  }
  