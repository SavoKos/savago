import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { adults, children, rooms } from 'redux/searchInfoSlice';
import styled from 'styled-components';
import Icon from './UI/Icon';

function NumberPicker({ type }) {
  const [number, setNumber] = useState(type === 'children' ? 0 : 1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === 'adults') dispatch(adults(number));
    if (type === 'children') dispatch(children(number));
    if (type === 'rooms') dispatch(rooms(number));
  }, [number]);

  const decreaseNumber = () => {
    if (type === 'children')
      return setNumber((prevNum) => (prevNum < 1 ? 0 : prevNum - 1));
    setNumber((prevNum) => (prevNum < 2 ? 1 : prevNum - 1));
  };

  return (
    <S.NumberPicker>
      <S.Number>
        <Icon type='icon-minus' className='minus' onClick={decreaseNumber} />
        <p>{number}</p>
        <Icon
          type='icon-plus'
          className='plus'
          onClick={() => setNumber((prevNum) => prevNum + 1)}
        />
      </S.Number>
    </S.NumberPicker>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.NumberPicker = styled.div`
  position: relative;
  width: -webkit-fill-available;

  .anticon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.darkBlue};
    background-color: ${({ theme }) => theme.colors.white};
    padding: 0.7rem;
    border-radius: 50%;
    cursor: pointer;

    @media screen and (min-width: 480px) {
      padding: 1rem;
    }

    &.minus {
      left: 0.5rem;
    }

    &.plus {
      right: 0.5rem;
    }
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

S.Number = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.darkBlue};
  padding: 1rem 2rem;
  width: 100%;
  border-radius: 10rem;
  background-color: #fff;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  @media screen and (min-width: 480px) {
    padding: 1.5rem 2rem;
  }
`;

export default NumberPicker;
