// Імпортую необхідні іконки та стилізовані компоненти з інших файлів
import { AiOutlinePhone } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';
import {
  Box,
  Btn,
  ContactName,
  ContactNumber,
  List,
} from './ContactList.styled';
// Імпортую екшен deleteContact та селектори getContacts та getFilter з Redux slice
import { deleteContact, getContacts, getFilter } from 'redux/slise';
// Імпортую хуки useDispatch та useSelector з React Redux
import { useDispatch, useSelector } from 'react-redux';
// Імпортую компоненту Massege
import Massege from 'components/Massege';

const ContactList = () => {
  const svgStylePhon = { fill: '#006400', marginRight: '8px' };
  const svgStyleUser = { fill: '#FF4500', marginLeft: '8px' };

  // Отримання екземпляра useDispatch та селекторів з Redux store
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  // Функція фільтрації контактів залежно від значення фільтра
  const getContactOnFilter = () => {
    if (filter !== '') {
      const normalizedFilter = filter.toLowerCase();

      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    }
    return contacts;
  };

  // Контакти після обробки фільтрів
  const contactsProcessedFilters = getContactOnFilter();

  return (
    <>
      {contactsProcessedFilters.length > 0 ? (
        // Відображення списку контактів, якщо вони є
        <Box>
          {contactsProcessedFilters.map(({ id, name, number }) => (
            // Відображення окремого контакту в списку
            <List key={id}>
              <AiOutlinePhone style={svgStylePhon} size={20}></AiOutlinePhone>
              <ContactName>{name}</ContactName>
              <ContactNumber>{number}</ContactNumber>
              {/* Кнопка для видалення контакту за допомогою екшена deleteContact */}
              <Btn type='button' onClick={e => dispatch(deleteContact(id))}>
                Delete <FaTrashAlt style={svgStyleUser} size={15}></FaTrashAlt>
              </Btn>
            </List>
          ))}
        </Box>
      ) : (
        // Відображення повідомлення, якщо список контактів порожній
        <Massege>No Message</Massege>
      )}
    </>
  );
};

export default ContactList;
