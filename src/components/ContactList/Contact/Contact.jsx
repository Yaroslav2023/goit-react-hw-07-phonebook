import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactSlice';
import cl from './contact.module.css';

const Contact = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { searchQuery } = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(removeContact(id));
  };
  const getFilteredData = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  const filteredData = getFilteredData(contacts);

  return (
    <div>
      {filteredData.map(el => (
        <li key={el.id} className={cl.item}>
          {el.name} {el.number}
          <button
            className={cl.btn}
            name="delete"
            onClick={() => onDelete(el.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default Contact;
