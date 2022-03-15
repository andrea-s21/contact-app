import { Link } from 'react-router-dom';

export default function ContactCard({ contact, setContacts }) {

    // function handleShowContact(contact, id) {
    //     setContacts(contact, id)
    // }
    return (
        <div>
            <Link to={`/edit/${contact.first}`}>
            <p>{contact.first}</p></Link>
            <p>{contact.last}</p>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
            {/* <button type="button" onClick={() => handleShowContact(contact.id)}>Update Contact</button> */}
            <hr />
        </div>
    );

}