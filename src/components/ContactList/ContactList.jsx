import ContactForm from '../Form';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <li key={id} id={id}>
          {name}: {number}
          <button
            type="button"
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
