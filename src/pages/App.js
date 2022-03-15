import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ContactsListingPage from './ContactsListingPage/ContactsListingPage';
import EditContactPage from './EditContactPage/EditContactPage';

export default function App() {
  const [contacts, setContacts] = useState([
  {
   first: 'Andrea1',
   last: 'Sisneros',
   phone: '505-506-9724',
   email: 'andreasisneros21@gmail.com'
  },
  {
    first: 'Andrea2',
    last: 'Sisneros',
    phone: '505-506-9724',
    email: 'andreasisneros21@gmail.com'
   },
   {
    first: 'Andrea3',
    last: 'Sisneros',
    phone: '505-506-9724',
    email: 'andreasisneros21@gmail.com'
   }
  ]);
  return (
    <Routes>
    <Route path="/" element={<ContactsListingPage contacts={contacts} setContacts={setContacts} />} />
    <Route path="/edit/:contactName" element={<EditContactPage contacts={contacts} />} />
  </Routes>
      
  
  );
}
