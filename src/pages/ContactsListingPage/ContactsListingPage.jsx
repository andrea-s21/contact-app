import ContactCard from '../../components/ContactCard/ContactCard';
import { Link } from 'react-router-dom';

export default function ContactsListingPage({ contacts, setContacts }) {
    const contactList = contacts.map((c, idx) => (
        <ContactCard contact={c} key={idx} setContacts={setContacts} />
    ));

    return (
        <div>
            <h1>Contact Listings</h1>
            <Link to="/add">Add Contact</Link>
            {contactList}
        </div>
    );

}