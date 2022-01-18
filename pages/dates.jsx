import styled from 'styled-components';
import Head from 'next/head';
import Map from '@components/Map';
import Navigation from '@components/Navigation';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import Spinner from '@components/UI/Spinner';
import { useEffect } from 'react';
import DatePicker from '@components/DatePicker';
import Icon from '@components/UI/Icon';

function Dates() {
  const { destination, checkin, checkout } = useSelector(
    (state) => state.destination
  );

  console.log(destination, checkin, checkout);

  useEffect(() => {
    if (destination === '') return Router.push('/');
  }, [destination]);

  if (destination === '')
    return (
      <S.Spinner>
        <Spinner />
      </S.Spinner>
    );

  return (
    <>
      <Head>
        <title>savago. Find your next trip</title>
      </Head>
      <Navigation active='home' />
      <S.Container>
        <S.Main>
          <p className='greeting'>Welcome back.</p>
          <h1>
            <span>When</span> and <span>How </span>
            <br />
            long is your trip?
          </h1>
          <DatePicker />
          <S.Buttons>
            <S.Back onClick={() => Router.push('/')}>
              <Icon type='icon-arrow-left' />
              <p>Back</p>
            </S.Back>
            <p className='next'>Next</p>
          </S.Buttons>
        </S.Main>
        <Map active='dates' />
      </S.Container>
    </>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  margin-top: 3rem;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
`;

S.Main = styled.div`
  width: 100%;

  @media screen and (min-width: 1300px) {
    width: 50%;
  }

  h1 {
    font-size: clamp(2rem, 10vw, 4rem);
    margin: 2rem 0;
    color: ${({ theme }) => theme.colors.darkBlue};

    @media only screen and (min-width: 768px) {
      margin: 3rem 0;
    }
  }

  span {
    color: ${({ theme }) => theme.colors.lightBlue};
  }

  .greeting {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

S.Spinner = styled.div`
  height: 100vh;
  display: grid;
`;

S.Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 3rem;

  .next {
    background-color: ${({ theme }) => theme.colors.lightBlue};
    border-radius: 10rem;
    padding: 1.5rem 4rem;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }
`;

S.Back = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  .anticon {
    margin-right: 1rem;
  }

  p,
  .anticon {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export default Dates;
