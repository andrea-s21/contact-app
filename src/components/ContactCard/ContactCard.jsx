import { Link } from 'react-router-dom';

export default function ContactCard({ contact }) {

    return (
        <div>
            <p>First Name: {contact.first}</p>
            <p> Last Name: {contact.last}</p>
            <p>Phone: {contact.phone}</p>
            <p> Email: {contact.email}</p>
            <Link to={`/edit/${contact.id}`}>Edit Contact</Link>
            <hr />
        </div>
    );

}