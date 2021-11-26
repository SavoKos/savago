import Head from 'next/head';
import styled from 'styled-components';
import Navigation from '../components/Navigation';

export default function Discover() {
  return (
    <>
      <Head>
        <title>Savago | Find your next trip</title>
      </Head>
      <Navigation />
      <S.Discover>
        <p>Good morning</p>
        <h1>
          <span>Where</span> are you <br />
          going to go?
        </h1>
        <S.SearchHotel>
          <input type='text' placeholder='Destination or a hotel name' />
        </S.SearchHotel>
      </S.Discover>
    </>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Discover = styled.div`
  padding: 0 5%;
  margin-top: 3rem;

  h1 {
    font-size: 5rem;
    margin: 3rem 0;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  span {
    color: ${({ theme }) => theme.colors.lightBlue};
  }

  p {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

S.SearchHotel = styled.div`
  input {
    padding: 2rem;
    width: 50%;
    border-radius: 100rem;
    outline: 0;
    border: 0;
  }
`;
