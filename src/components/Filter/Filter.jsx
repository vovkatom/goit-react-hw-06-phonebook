import { useDispatch, useSelector } from 'react-redux';
import { filterOnContact, getFilter } from 'redux/slise';
// Імпортую стилізовані компоненти для мітки та поля вводу
import { Label, Input } from './Filter.styled';

const Filter = () => {
  // Отримання диспетчера екшенів та поточного значення фільтра з Redux
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <div>
      {/* Форма для фільтрації контактів за ім'ям */}
      <Label>
        Find contacts by name
        <Input
          type='text'
          value={filter}
          // Обробник зміни для оновлення фільтра в Redux store
          onChange={e => dispatch(filterOnContact(e.currentTarget.value))}
        ></Input>
      </Label>
    </div>
  );
};

export default Filter;
