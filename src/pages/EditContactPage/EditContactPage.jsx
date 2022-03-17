
import EditContactForm from "../../components/EditContactForm/EditContactForm";

export default function EditContactPage({ contacts, editContact, deleteContact }) {

        return (
            <div>
            <h1>Edit Contact</h1>
            <EditContactForm  editContact={editContact} deleteContact={deleteContact} />
        </div>
    );
}