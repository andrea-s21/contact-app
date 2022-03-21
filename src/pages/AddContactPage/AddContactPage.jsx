import { Link } from 'react-router-dom';
import AddContactForm from "../../components/AddContactForm/AddContactForm";
import Container from '@mui/material/Container';
import ReactDocumentTitle from 'react-document-title';


export default function AddContactPage({ contacts, setContacts, setUpdateContact, addContact }) {

    return (
        <ReactDocumentTitle title ="Add Contact">
        <Container>
            <h1>Add Contact</h1>
            <AddContactForm contacts={contacts} setContacts={setContacts} setUpdateContact={setUpdateContact} addContact={addContact} />
            <Link className="link-btn" to="/">Cancel</Link>
        </Container>
        </ReactDocumentTitle>
    );
}