import { Link } from 'react-router-dom';
import AddContactForm from "../../components/AddContactForm/AddContactForm";
import Container from '@mui/material/Container';
import ReactDocumentTitle from 'react-document-title';


export default function AddContactPage({ addContact }) {

    return (
        <ReactDocumentTitle title ="Add Contact">
        <Container>
            <h1>Add Contact</h1>
            <AddContactForm addContact={addContact} />
            <Link className="link-btn" to="/">Cancel</Link>
        </Container>
        </ReactDocumentTitle>
    );
}