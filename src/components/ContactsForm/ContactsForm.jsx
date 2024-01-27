import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FaUserPlus } from 'react-icons/fa';
import { Btn, Form, Input, Label } from './ContactsForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts, getContacts } from 'redux/slise';

function ContactForm () {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handlChange = e => {
    const { value, name } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContacts(newContact));
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const iconStyles = { fill: '#FFFFFF', marginLeft: '10px' };
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        addContact({ name, number });
      }}
    >
      <Label>
        Name
        <Input
          type='text'
          name='name'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handlChange}
        />
      </Label>
      <Label>
        Number
        <Input
          type='tel'
          name='number'
          pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          required
          value={number}
          onChange={handlChange}
        />
      </Label>
      <Btn type='submit'>
        Add contact
        <FaUserPlus style={iconStyles} size={20}></FaUserPlus>
      </Btn>
    </Form>
  );
}

export default ContactForm;
