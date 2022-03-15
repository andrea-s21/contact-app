import EditContactForm from "../../components/EditContactForm/EditContactForm";


export default function EditContactPage({ contacts }) {
    return (
        <div>
            <h1>Edit Contact</h1>
            <EditContactForm contacts={contacts} />
        </div>
    );
        
  

}