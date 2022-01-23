import { useDispatch, useSelector } from 'react-redux';
import {
  checkin as checkinFunc,
  checkout as checkoutFunc,
} from 'redux/searchInfoSlice';
import styled from 'styled-components';

function DatePicker() {
  const dispatch = useDispatch();

  const { checkin, checkout } = useSelector((state) => state.searchInfo);

  const pickDateHandler = (date, type) => {
    if (type === 'checkin') return dispatch(checkinFunc(date));
    if (type === 'checkout') return dispatch(checkoutFunc(date));
  };

  return (
    <S.DatePicker>
      <S.Field>
        <span>from </span>
        <input
          type='date'
          name=''
          id=''
          onChange={(e) => pickDateHandler(e.target.value, 'checkin')}
          value={checkin || ''}
          min={new Date().toISOString().slice(0, 10)}
        />
      </S.Field>
      <S.Field>
        <span> to</span>
        <input
          type='date'
          name=''
          id=''
          onChange={(e) => pickDateHandler(e.target.value, 'checkout')}
          value={checkout || ''}
          disabled={!checkin}
          min={checkin}
        />
      </S.Field>
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
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

S.Field = styled.div`
  width: min(100%, calc(70% + 100px));
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  @media screen and (min-width: 768px) {
    justify-content: unset;

    span {
      margin-right: 1rem;
    }
  }
`;

export default DatePicker;
