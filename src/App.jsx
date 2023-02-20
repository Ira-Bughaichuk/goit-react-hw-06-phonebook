import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const initial = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  return (
    <div style={{ margin: '30px' }}>
      <h1 style={{ paddingBottom: '30px' }}>Phonebook</h1>
      <ContactForm />
      <h2 style={{ paddingBottom: '30px' }}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
