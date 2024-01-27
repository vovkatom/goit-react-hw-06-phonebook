import { createSlice } from '@reduxjs/toolkit';

// Початковий стан для срізу (slice) телефонної книги
const contactsInitialState = {
  contacts: [],
  filter: '',
};

// Створюю Redux сріз для управління станом телефонної книги
const contactsSlice = createSlice({
  // Назва срізу
  name: 'phonebook',
  // Початковий стан
  initialState: contactsInitialState,
  // Редуктори визначають, як стан може бути оновлений у відповідь на дії
  reducers: {
    // Дія для додавання нового контакту
    addContacts: {
      reducer: (state, { payload }) => {
        // Додаю новий контакт до масиву контактів
        state.contacts.push(payload);
      },
    },
    // Дія для видалення контакту
    deleteContact: {
      reducer: (state, { payload }) => {
        // Видаляю контакт із масиву за заданим ідентифікатором
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload
        );
      },
    },
    // Дія для оновлення значення фільтра
    filterOnContact: {
      reducer: (state, { payload }) => {
        // Оновлюю значення фільтра заданою величиною
        state.filter = payload;
      },
    },
  },
});

// Експортую дії та редуктор
export const { addContacts, deleteContact, filterOnContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// Селектори для доступу до конкретних частин стану Redux
export const getContacts = state => state.phonebook.contacts;
export const getFilter = state => state.phonebook.filter;
