import { useDispatch, useSelector } from 'react-redux';
import {
  checkin as checkinFunc,
  checkout as checkoutFunc,
} from 'redux/desinationSlice';
import styled from 'styled-components';

function DatePicker() {
  const dispatch = useDispatch();

  const { checkin, checkout } = useSelector((state) => state.destination);

  const pickDateHandler = (date, type) => {
    if (type === 'checkin') return dispatch(checkinFunc(date));
    if (type === 'checkout') return dispatch(checkoutFunc(date));
  };

  return (
    <S.DatePicker>
      <span>from </span>
      <input
        type='date'
        name=''
        id=''
        onChange={(e) => pickDateHandler(e.target.value, 'checkin')}
        value={checkin || null}
      />
      <span> to</span>
      <input
        type='date'
        name=''
        id=''
        onChange={(e) => pickDateHandler(e.target.value, 'checkout')}
        value={checkout || null}
      />
    </S.DatePicker>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.DatePicker = styled.div`
  input {
    outline: 0;
    border: 0;
    padding: 1rem;
    border-radius: 1rem;
    margin: 0 2rem;
  }
`;

export default DatePicker;
