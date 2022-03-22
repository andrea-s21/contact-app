import { Link } from 'react-router-dom';
import React, { useEffect} from "react";
import ContactCard from '../../components/ContactCard/ContactCard';
import StateCard from '../../components/StateCard/StateCard';
import Container from '@mui/material/Container';

export default function ContactsListingPage({ contacts, state, }) {
    const contactCardItems = contacts.map((c, idx) => (
        <ContactCard key={idx} contact={c} />
    ));
    const stateCardItems = state.map((s, idx) => (
        <StateCard key={idx} state={s} />
    ));
    useEffect(() => {
        document.title = "All Contacts";  
      }, []);

    return (
        <Container>
            <h1>Contact Listings</h1>
            {stateCardItems}
            {contactCardItems}
            <br />
            <Link className="link-btn" to="/add">Add Contact</Link>
        </Container>
    );

}