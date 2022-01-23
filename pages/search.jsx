import styled from 'styled-components';
import Head from 'next/head';
import Navigation from '@components/Navigation';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import Spinner from '@components/UI/Spinner';
import { useEffect } from 'react';
import axios from 'axios';

function Search() {
  const { destination, checkin, checkout, rooms, children, adults } =
    useSelector((state) => state.searchInfo);

  useEffect(() => {
    if (destination === '') return Router.push('/');
    if (checkin === '' || checkout === '') return Router.push('/dates');

    const options = {
      method: 'GET',
      url: 'https://booking-com.p.rapidapi.com/v1/hotels/search',
      params: {
        room_number: rooms,
        order_by: 'popularity',
        filter_by_currency: 'EUR',
        checkout_date: checkout,
        checkin_date: checkin,
        units: 'metric',
        adults_number: adults,
        dest_id: destination.id,
        dest_type: destination.type,
        locale: 'en-gb',
        ...(children > 0 && { children_number: children }),
        page_number: '0',
        include_adjacency: 'true',
      },
      headers: {
        'x-rapidapi-host': 'booking-com.p.rapidapi.com',
        'x-rapidapi-key': '06d2a290fdmsh3e28c357bce8b6ap106aa0jsn246e7755295c',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  if (destination === '' || checkin === '' || checkout === '')
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
        <S.Main></S.Main>
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

S.Main = styled.div``;

S.Spinner = styled.div`
  height: 100vh;
  display: grid;
`;

S;

export default Search;
