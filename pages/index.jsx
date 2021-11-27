import Icon from '@components/UI/Icon';
import Head from 'next/head';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Map from '@components/Map';

export default function Discover() {
  return (
    <>
      <Head>
        <title>Savago | Find your next trip</title>
      </Head>
      <Navigation />
      <S.Container>
        <S.Discover>
          <p>Welcome back</p>
          <h1>
            <span>Where</span> are you <br />
            going to go?
          </h1>
          <S.SearchHotel>
            <Icon type='icon-search' className='search-icon' />
            <input type='text' placeholder='Destination or a hotel name' />
            <S.SearchBtn>
              <p>Let&apos;s Go</p>
              <Icon type='icon-arrow-right' />
            </S.SearchBtn>
          </S.SearchHotel>
        </S.Discover>
        <Map page='Discover' />
      </S.Container>
    </>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  padding: 0 10%;
  margin-top: 3rem;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
`;

S.Discover = styled.div`
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
  position: relative;
  width: 100%;

  input {
    padding: 2rem 0 2rem 5rem;
    width: 100%;
    border-radius: 100rem;
    outline: 0;
    border: 0;
    font-size: 1em;
    -webkit-box-shadow: 0px 10px 121px -42px rgba(0, 0, 0, 0.46);
    -moz-box-shadow: 0px 10px 121px -42px rgba(0, 0, 0, 0.46);
    box-shadow: 0px 10px 121px -42px rgba(0, 0, 0, 0.46);
  }

  .search-icon {
    color: ${({ theme }) => theme.colors.gray};
    position: absolute;
    top: 50%;
    left: 6%;
    transform: translate(-6%, -50%);
    font-size: 1.5em;
  }
`;

S.SearchBtn = styled.div`
  position: absolute;
  right: 1%;
  top: 50%;
  transform: translate(-1%, -50%);
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 100rem;
  padding: 1.5rem 2.5rem 1.5rem 2.5rem;
  cursor: pointer;
  -webkit-box-shadow: 0px 2px 13px 1px rgba(0, 128, 255, 0.43);
  -moz-box-shadow: 0px 2px 13px 1px rgba(0, 128, 255, 0.43);
  box-shadow: 0px 2px 13px 1px rgba(0, 128, 255, 0.43);

  p,
  .anticon {
    color: #fff;
    margin-left: 1rem;
  }

  .anticon {
    font-size: 1.3em;
  }

  p {
    font-size: 1.05em;
    font-weight: 500;
  }
`;
