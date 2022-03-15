import { useParams } from "react-router-dom";


export default function EditContactForm({ contacts }) {
    const { contactName } = useParams();
    let contact = contacts.find((c) => c.first === contactName);
    return (
        <div>
            <p>{contact.first}</p>
            <p>{contact.last}</p>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
        </div>
    );

}