import styled from 'styled-components';
import Head from 'next/head';
import Map from '@components/Map';
import Navigation from '@components/Navigation';

function dates() {
  return (
    <>
      <Head>
        <title>savago. Find your next trip</title>
      </Head>
      <Navigation active='home' />
      <S.Container>
        <S.Discover>
          <p className='greeting'>Welcome back.</p>
          <h1>
            <span>When</span> and <span>How </span>
            <br />
            long is your trip?
          </h1>
        </S.Discover>
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

S.Discover = styled.div`
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

export default dates;
