import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ContactsListingPage from './ContactsListingPage/ContactsListingPage';
import AddContactPage from './AddContactPage/AddContactPage';
import EditContactPage from './EditContactPage/EditContactPage';
import NavBar from '../components/NavBar/NavBar';

export default function App() {

  const [state] = useState([
    {
      id: 0,
      first: 'Andrea1',
      last: 'Sisneros',
      phone: '505-506-9724',
      email: 'andreasisneros21@gmail.com'
    },
    {
      id: 1,
      first: 'Andrea2',
      last: 'Sisneros',
      phone: '505-506-9724',
      email: 'andreasisneros21@gmail.com'
    }
  ]);
  const [contacts, setContacts] = useState([]);

  function addContact(contact) {
    setContacts([...contacts, contact]);
  }

  function editContact(updatedContact, id) {
    const updatedItem = contacts.map((contact) => {
      return contact.id === id ? updatedContact : contact;
    });
    setContacts(updatedItem);
  }

  function deleteContact(id) {
    const removeItem = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(removeItem);
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ContactsListingPage contacts={contacts} setContacts={setContacts} state={state} />} />
        <Route path="/add" element={<AddContactPage contacts={contacts} addContact={addContact} />} />
        <Route path="/edit/:contactName" element={<EditContactPage contacts={contacts} setContacts={setContacts} editContact={editContact} deleteContact={deleteContact} />} />
      </Routes>
    </>

  );
}
