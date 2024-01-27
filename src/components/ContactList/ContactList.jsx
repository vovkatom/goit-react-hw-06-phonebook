import { AiOutlinePhone } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';

import {
  Box,
  Btn,
  ContactName,
  ContactNumber,
  List,
} from './ContactList.styled';
import { deleteContact, getContacts, getFilter } from 'redux/slise';
import { useDispatch, useSelector } from 'react-redux';
import Massege from 'components/Massege';

const ContactList = () => {
  const svgStylePhon = { fill: '#006400', marginRight: '8px' };
  const svgStyleUser = { fill: '#FF4500', marginLeft: '8px' };
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getContactOnFilter = () => {
    if (filter !== '') {
      const normalizedFilter = filter.toLowerCase();

      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    }
    return contacts;
  };
  const contactsProcessedFilters = getContactOnFilter();

  return (
    <>
      {contactsProcessedFilters.length > 0 ? (
        <Box>
          {contactsProcessedFilters.map(({ id, name, number }) => (
            <List key={id}>
              <AiOutlinePhone style={svgStylePhon} size={20}></AiOutlinePhone>
              <ContactName>{name}</ContactName>
              <ContactNumber>{number}</ContactNumber>
              <>
                <Btn type="button" onClick={e => dispatch(deleteContact(id))}>
                  Delete{' '}
                  <FaTrashAlt style={svgStyleUser} size={15}></FaTrashAlt>
                </Btn>
              </>
            </List>
          ))}
        </Box>
      ) : (
        <Massege>No Massege</Massege>
      )}
    </>
  );
};

export default ContactList;
