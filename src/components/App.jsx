import { Container } from './App.styled';
import ContactForm from './ContactsForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Title from './Title';

const App = () => {
  return (
    <Container>
      <Title title="Phonebook"></Title>
      <ContactForm />
      <div>
        <Title title="Contacts"></Title>
        <Filter />
        <ContactList />
      </div>
    </Container>
  );
};

export default App;
