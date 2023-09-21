import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/API/contactsApi';
import { selectContacts } from 'redux/contactSlice';
import { selectFilterContacts } from 'redux/selectors';
import cl from './contact.module.css';

const Contact = () => {
  const { items, error } = useSelector(selectContacts);
  const { filter } = useSelector(selectFilterContacts);
  const dispatch = useDispatch();

  const onDelete = uid => dispatch(deleteContact(uid));

  if (error) {
    return (
      <div>
        <p>Ooops!!! Something went wrong!</p>
        <p>Error:{error}</p>
      </div>
    );
  }

  let arrayContacts = [];
  if (filter === '') {
    arrayContacts = items;
  } else {
    const normalizedFilter = filter.toLocaleLowerCase();
    arrayContacts = items.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  }

  return (
    <div>
      {arrayContacts.map(el => (
        <li key={el.uid} className={cl.item}>
          {el.name} {el.number}
          <button
            className={cl.btn}
            name="delete"
            onClick={() => onDelete(el.uid)}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default Contact;
