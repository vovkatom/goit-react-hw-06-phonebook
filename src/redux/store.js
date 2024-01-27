import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slise';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// Імпортую об'єкт 'storage' для redux-persist
import storage from 'redux-persist/lib/storage';

// Конфігурація для redux-persist
const persistConfig = {
  key: 'root', // Ключ для зберігання даних в localStorage
  storage, // Об'єкт зберігання (в даному випадку - localStorage)
  whitelist: ['contacts'], // Список полів стану, які слід зберігати
};

// Створення персистентного редуктора за допомогою redux-persist
const persistedReducer = persistReducer(persistConfig, contactsReducer);

// Створення Redux store з використанням configureStore
const store = configureStore({
  reducer: { phonebook: persistedReducer }, // Додаю персистентний редуктор до стору
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Створення персистентного об'єкта, який слідкує за станом Redux та зберігає його в localStorage
export const persistor = persistStore(store);

// Експортую Redux store
export default store;
