import './App.css';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import ContactsListingPage from './ContactsListingPage/ContactsListingPage';
import AddContactPage from './AddContactPage/AddContactPage';
import EditContactPage from './EditContactPage/EditContactPage';

export default function App() {

  const [contacts, setContacts] = useState([
  {
   id: uuidv4(),
   first: 'Andrea1',
   last: 'Sisneros',
   phone: '505-506-9724',
   email: 'andreasisneros21@gmail.com'
  },
  {
    id: uuidv4(),
    first: 'Andrea2',
    last: 'Sisneros',
    phone: '505-506-9724',
    email: 'andreasisneros21@gmail.com'
   }
  ]);

function addContact(contact) {
  setContacts((prev) => {
    return [...prev, { id: uuidv4(), ...contact }];
  });
}

function editContact(updatedContact, id) {
  const newContactList = contacts.filter((contact) => {
    return contact.id !== id;
  });
  setContacts([...newContactList, { id: id, ...updatedContact }]);
}

function deleteContact(id) {
  const newContactList = contacts.filter((contact) => {
    return contact.id !== id;
  });
  setContacts(newContactList);
}



  return (
    <Routes>
    <Route path="/" element={<ContactsListingPage contacts={contacts} setContacts={setContacts} />} />
    <Route path="/add" element={<AddContactPage contacts={contacts} setContacts={setContacts} addContact={addContact} />} />
    <Route path="/edit/:id" element={<EditContactPage contacts={contacts} setContacts={setContacts} editContact={editContact} deleteContact={deleteContact} />} />
  </Routes>
      
  
  );
}
