import { useDispatch, useSelector } from 'react-redux';
import { filterOnContact, getFilter } from 'redux/slise';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <div>
      <Label>
        Find contacts by name
        <Input
          type='text'
          value={filter}
          onChange={e => dispatch(filterOnContact(e.currentTarget.value))}
        ></Input>
      </Label>
    </div>
  );
};

export default Filter;
