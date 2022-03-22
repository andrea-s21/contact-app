import { Link } from 'react-router-dom';
import React, { useEffect} from "react";
import AddContactForm from "../../components/AddContactForm/AddContactForm";
import Container from '@mui/material/Container';

export default function AddContactPage({ addContact }) {
    useEffect(() => {
        document.title = "Add Contact";  
      }, []);
    return (
        <Container>
            <h1>Add Contact</h1>
            <AddContactForm addContact={addContact} />
            <Link className="link-btn" to="/">Cancel</Link>
        </Container>
    );
}