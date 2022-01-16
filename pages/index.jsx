import Icon from '@components/UI/Icon';
import Head from 'next/head';
import styled from 'styled-components';
import Navigation from '../components/Navigation/Navigation';
import Map from '@components/Map';
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import SearchHotel from '@components/SearchHotel';

export default function Discover() {
  const destinationItems = [
    <S.Destination key={1}>
      <S.Image>
        <Image src='/india.webp' layout='fill' />
      </S.Image>
      <h3>Hotels in India</h3>
      <p>
        300,520 Hotels - <span>Avg. $92</span>
      </p>
    </S.Destination>,
    <S.Destination key={2}>
      <S.Image>
        <Image src='/greece.webp' layout='fill' />
      </S.Image>
      <h3>Hotels in Greece</h3>
      <p>
        300,520 Hotels - <span>Avg. $92</span>
      </p>
    </S.Destination>,
    <S.Destination key={3}>
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
          <SearchHotel />
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
  min-height: 250px;

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
