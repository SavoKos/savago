import Icon from '@components/UI/Icon';
import Head from 'next/head';
import styled from 'styled-components';
import Navigation from '../components/Navigation/Navigation';
import Map from '@components/Map';
import axios from 'axios';
import { useEffect } from 'react';
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function Discover() {
  useEffect(() => {
    var options = {
      method: 'GET',
      url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
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

  const destinationItems = [
    <S.Destination>
      <S.Image>
        <Image src='/india.webp' layout='fill' />
      </S.Image>
      <h3>Hotels in India</h3>
      <p>
        300,520 Hotels - <span>Avg. $92</span>
      </p>
    </S.Destination>,
    <S.Destination>
      <S.Image>
        <Image src='/greece.webp' layout='fill' />
      </S.Image>
      <h3>Hotels in Greece</h3>
      <p>
        300,520 Hotels - <span>Avg. $92</span>
      </p>
    </S.Destination>,
    <S.Destination>
      <S.Image>
        <Image src='/spain.webp' layout='fill' />
      </S.Image>
      <h3>Hotels in Spain</h3>
      <p>
        300,520 Hotels - <span>Avg. $92</span>
      </p>
    </S.Destination>,
  ];

  return (
    <>
      <Head>
        <title>savago. Find your next trip</title>
      </Head>
      <Navigation />
      <S.Container>
        <S.Discover>
          <p>Welcome back.</p>
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
          <S.TopDestinations>
            <S.Header>
              <h3>Top Destinations</h3>
            </S.Header>
            <S.Destinations>
              <AliceCarousel
                mouseTracking
                items={destinationItems}
                keyboardNavigation
                disableDotsControls={true}
                renderPrevButton={() => (
                  <Icon type='icon-arrow-left' className='carousel-nav-btn' />
                )}
                renderNextButton={() => (
                  <Icon type='icon-arrow-right' className='carousel-nav-btn' />
                )}
                responsive={{
                  0: {
                    items: 1,
                  },
                  768: {
                    items: 3,
                  },
                }}
              />
            </S.Destinations>
          </S.TopDestinations>
        </S.Discover>
        <Map page='Discover' />
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
    font-size: clamp(2rem, 10vw, 5rem);
    margin: 2rem 0;
    color: ${({ theme }) => theme.colors.darkBlue};

    @media only screen and (min-width: 768px) {
      margin: 3rem 0;
    }
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
    padding: 1.5rem 0 1.5rem 3rem;
    width: 100%;
    border-radius: 100rem;
    outline: 0;
    border: 0;
    font-size: 0.75em;
    -webkit-box-shadow: 0px 10px 121px -42px rgba(0, 0, 0, 0.46);
    -moz-box-shadow: 0px 10px 121px -42px rgba(0, 0, 0, 0.46);
    box-shadow: 0px 10px 121px -42px rgba(0, 0, 0, 0.46);

    @media screen and (min-width: 480px) {
      font-size: 1em;
      padding: 1.5rem 0 1.5rem 4rem;
    }

    @media screen and (min-width: 768px) {
      padding: 2rem 0 2rem 5rem;
    }
  }

  .search-icon {
    color: ${({ theme }) => theme.colors.gray};
    position: absolute;
    top: 50%;
    left: 6%;
    transform: translate(-6%, -50%);
    font-size: 1.1em;

    @media screen and (min-width: 768px) {
      font-size: 1.5em;
    }
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
  padding: 1rem;
  border-radius: 50%;
  cursor: pointer;
  -webkit-box-shadow: 0px 2px 13px 1px rgba(0, 128, 255, 0.43);
  -moz-box-shadow: 0px 2px 13px 1px rgba(0, 128, 255, 0.43);
  box-shadow: 0px 2px 13px 1px rgba(0, 128, 255, 0.43);

  @media screen and (min-width: 768px) {
    border-radius: 100rem;
    padding: 1.5rem 2.5rem 1.5rem 2.5rem;
  }

  p,
  .anticon {
    color: #fff;

    @media screen and (min-width: 768px) {
      margin-left: 1rem;
    }
  }

  .anticon {
    font-size: 1.1em;

    @media screen and (min-width: 768px) {
      font-size: 1.3em;
    }
  }

  p {
    font-size: 1.05em;
    font-weight: 500;
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }
`;

S.TopDestinations = styled.div`
  margin-top: 4rem;

  @media screen and (min-width: 768px) {
    margin-top: 5rem;
  }
`;

S.Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;

  h3 {
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;

S.Image = styled.div`
  position: relative;
  min-height: 350px;

  @media screen and (min-width: 768px) {
    min-height: 150px;
  }
`;

S.Destinations = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    padding-right: 1.2rem !important;
    padding-left: 1.2rem !important;
  }
`;

S.Destination = styled.div`
  width: 100%;
  position: relative;
  height: 100%;

  @media screen and (min-width: 768px) {
    width: 95%;
  }

  &:nth-child(2) {
    margin: 0 1rem;
  }

  img {
    border-radius: 1rem;
  }

  h3 {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  span {
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 600;
  }
`;

// S.Arrows = styled.div`
//   .anticon {
//     color: ${({ theme }) => theme.colors.darkBlue};
//     font-size: 1.3em;
//     cursor: pointer;

//     &:nth-of-type(1) {
//       color: ${({ theme }) => theme.colors.gray};
//       opacity: 0.4;
//       margin-right: 2rem;
//     }
//   }
// `;
