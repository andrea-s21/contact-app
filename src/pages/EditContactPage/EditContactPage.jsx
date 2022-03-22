import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import React, { useEffect} from "react";
import EditContactForm from "../../components/EditContactForm/EditContactForm";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function EditContactPage({ contacts, editContact, deleteContact }) {
    const { contactName } = useParams();
    let contact = contacts.find((c) => c.first === contactName);
    useEffect(() => {
        document.title = "Edit Contact";  
      }, []);
    return (
        <Container>
            <h1>Edit Contact</h1>
            <Typography variant="h6" component="div">
                First Name:
            </Typography>
            <Typography sx={{ fontSize: 17 }} color="dark" gutterBottom>
                {contact.first}
            </Typography>
            <Typography variant="h6" component="div">
                Last Name:
            </Typography>
            <Typography sx={{ fontSize: 17 }} color="dark" gutterBottom>
                {contact.last}
            </Typography>
            <Typography variant="h6" component="div">
                Phone Number:
            </Typography>
            <Typography sx={{ fontSize: 17 }} color="dark" gutterBottom>
                {contact.phone}
            </Typography>
            <Typography variant="h6" component="div">
                Email Addreaa:
            </Typography>
            <Typography sx={{ fontSize: 17 }} color="dark" gutterBottom>
                {contact.email}
            </Typography>
            <br />
            <EditContactForm contact={contact} editContact={editContact} deleteContact={deleteContact} />
            <Link className="link-btn" to="/">Cancel</Link>
        </Container>
    );
}