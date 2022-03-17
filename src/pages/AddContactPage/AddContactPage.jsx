import AddContactForm from "../../components/AddContactForm/AddContactForm";
export default function AddContactPage({ contacts, setContacts, setUpdateContact, addContact }) {

    return (
        <div>
            <h1>Add Contact</h1>
            <AddContactForm contacts={contacts} setContacts={setContacts} setUpdateContact={setUpdateContact} addContact={addContact} />;
            <button>Delete Contact</button>
        </div>
    );



}