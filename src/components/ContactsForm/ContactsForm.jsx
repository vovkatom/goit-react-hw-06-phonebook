import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FaUserPlus } from 'react-icons/fa';
import { Btn, Form, Input, Label } from './ContactsForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts, getContacts } from 'redux/slise';

function ContactForm () {
  // Отримання стану та функції для оновлення стану з React.useState
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // Отримання списку контактів та диспетчера екшенів з Redux
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  // Обробник змін для полів вводу
  const handleChange = e => {
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

  // Функція для додавання нового контакту
  const addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };

    // Перевірка, чи контакт із таким ім'ям вже існує
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      // Додавання нового контакту та скидання полів форми
      dispatch(addContacts(newContact));
      reset();
    }
  };

  // Функція для скидання полів форми
  const reset = () => {
    setName('');
    setNumber('');
  };

  // Стилі для іконки на кнопці
  const iconStyles = { fill: '#FFFFFF', marginLeft: '10px' };

  return (
    // Форма для введення інформації про новий контакт
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
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Number
        <Input
          type='tel'
          name='number'
          pattern='\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          required
          value={number}
          onChange={handleChange}
        />
      </Label>
      {/* Кнопка для відправлення форми та додавання нового контакту */}
      <Btn type='submit'>
        Add contact
        <FaUserPlus style={iconStyles} size={20}></FaUserPlus>
      </Btn>
    </Form>
  );
}

export default ContactForm;
